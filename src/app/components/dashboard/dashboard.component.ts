import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FileInfo } from './file';
// import { map } from 'rxjs/operators';
import { Breadcrumb } from '../breadcrumb/breadcrumb';
// Services
import { DashboardService } from './dashboard.service';
// import { ScrollTopService } from '../../services/scroll-top.service';

@Component({
  selector: 'cgi-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  fileEntentions = {
    pdf: 'pdf.jpg',
    doc: 'word.jpg',
    docx: 'word.jpg',
    xls: 'excel.jpg',
    xlsx: 'excel.jpg',
    ppt: 'ppt.jpg',
    pptx: 'ppt.jpg'
  };
  titles = {
    'COE': 'Center of Excellence',
    'PNC': 'PNC Org Structure'
  };
  open = false;
  breadcrumb: Breadcrumb[];
  files: FileInfo[];
  filteredFileInfo = {
    projectInfo: [],
    fileInfo: []
  };
  code = 'COE';
  id: number;

  constructor(private dashboardService: DashboardService,
    // private scrollTopService: ScrollTopService,
    private actRouter: ActivatedRoute,
    private router: Router) {
    this.filteredFileInfo = {
      projectInfo: [],
      fileInfo: []
    };
    const routeParams = this.actRouter.snapshot.params;
    this.code = routeParams.code;
    this.id = routeParams.id;
    // OnInit issue while fetching children with no children.
    // override the route reuse strategy
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.actRouter.data.subscribe(
      (data) => {
        this.files = data.fileInfo['files'];
      }
    );
  }

  ngOnInit() {
    console.log('ngOnit');
    // this.scrollTopService.setScrollTop();
    // Based on id we will bring the childern/root folders.
    if (this.id) {
      this.getChildern(this.files, this.code, this.id);
    } else {
      this.getRootFolders(this.files, this.code);
    }
  }

  getRootFolders(files: FileInfo[], code: string): void {
    this.filteredFileInfo.projectInfo = files.filter(
      file => file.rootCode === code && !file.parentId && !file.isFile);
    this.filteredFileInfo.fileInfo = files.filter(
      file => file.rootCode === code && !file.parentId && file.isFile);
    const breadcrumbData = new Breadcrumb();
    // Preparing breadcrumb
    this.breadcrumb = [];
    this.pushBreadcrumbItem(this.titles[this.code] ? this.titles[this.code] : this.code, ['dashboard', this.code]);
  }

  getChildern(files: FileInfo[], code: string, id: number) {
    this.filteredFileInfo.projectInfo = files.filter(
      file => file.rootCode === code && file.parentId === +id);
    this.filteredFileInfo.fileInfo = files.filter(
      file => file.rootCode === code && file.parentId === +id && file.isFile);
    this.prepareBreadcrumb(id);
  }

  getFolderInfo(id: number) {
    return this.files.filter(
      file => file.id === +id)[0];
  }

  getParentInfo(parentId: number) {
    return this.files.filter(
      file => file.id === +parentId)[0];
  }

  // Will navigate tto dashboard/:id which will load the childern
  loadChildern(childInfo: any) {
    this.router.navigate(['dashboard', childInfo.code, childInfo.id]);
  }

  // Prepaqre breadcrumb
  prepareBreadcrumb(id: number) {
    this.breadcrumb = [];
    // Pushing current id
    let fileInfo: FileInfo = this.getFolderInfo(id);
    // Puhing current item
    this.pushBreadcrumbItem(fileInfo.name, ['dashboard', fileInfo.rootCode, fileInfo.id]);
    // Pushing parents
    while (fileInfo.parentId) {
      fileInfo = this.getParentInfo(fileInfo.parentId);
      if (fileInfo) {
        this.pushBreadcrumbItem(fileInfo.name, ['dashboard', fileInfo.rootCode, fileInfo.id]);
      }
    }
    // Pushing root
    this.pushBreadcrumbItem(this.titles[this.code] ? this.titles[this.code] : this.code, ['dashboard', this.code]);
    // Reverse the array
    this.breadcrumb = this.breadcrumb.reverse();
  }

  pushBreadcrumbItem(title: string, url: any[]) {
    const breadcrumbData: Breadcrumb = new Breadcrumb;
    breadcrumbData.title = title;
    breadcrumbData.url = url;
    this.breadcrumb = [...this.breadcrumb, breadcrumbData];
  }

  getFileIcon(filename: string) {
    const fileExtension = this.getFileExtension(filename);
    return this.fileEntentions[fileExtension];
  }

  getFileExtension(filename: string) {
    return filename.split('.').pop();
  }
}
