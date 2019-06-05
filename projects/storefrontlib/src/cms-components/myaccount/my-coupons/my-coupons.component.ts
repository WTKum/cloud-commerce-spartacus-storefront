import { Component, OnInit } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  ConverterService,
  OccEndpointsService,
  AuthService,
  PaginationModel,
} from '@spartacus/core';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'cx-my-coupons',
  templateUrl: './my-coupons.component.html',
})
export class MyCouponsComponent implements OnInit {
  coupons$: Observable<any[]>;

  // private PAGE_SIZE = 1;
  // private sortMapping = {
  //   byStartDateAsc: 'startDate:asc',
  //   byStartDateDesc: 'startDate:desc',
  //   byEndDateAsc: 'endDate:asc',
  //   byEndDateDesc: 'endDate:desc',
  // };

  sort = 'byStartDateAsc';
  sortLabels = {
    byStartDateAsc: 'StartDate(ASCENDING)',
    byStartDateDesc: 'StartDate(DESCENDING)',
    byEndDateAsc: 'EndDate(ASCENDING)',
    byEndDateDesc: 'EndDate(DESCENDING)',
  };
  sortOptions = [
    {
      code: 'byStartDateAsc',
      selected: false,
    },
    {
      code: 'byStartDateDesc',
      selected: false,
    },
    {
      code: 'byEndDateAsc',
      selected: false,
    },
    {
      code: 'byEndDateDesc',
      selected: false,
    },
  ];
  pagination: PaginationModel;
  userId: string;

  USER_ENDPOINT = 'users/';
  COUPONS_ENDPOINT = '/customercoupons';

  constructor(
    protected http: HttpClient,
    protected occEndpoints: OccEndpointsService,
    protected converter: ConverterService,
    protected auth: AuthService
  ) {}

  ngOnInit() {
    this.auth.getUserToken().subscribe(userData => {
      if (userData && userData.userId) {
        this.userId = userData.userId;
      }
    });
    //this.coupons$ = this.getCoupons(this.userId);
    this.coupons$ = this.getMockCoupons();
  }

  getMockCoupons(): Observable<any[]> {
    const mockCoupons = [
      {
        name: 'coupon1',
        description: 'coupon1 description',
        status: 'EFFECTIVE',
        notificationOn: true,
        startDate: '2019-1-1',
        EndDate: '2020-1-1',
      },
      {
        name: 'coupon2',
        description: 'coupon2 description',
        status: 'EFFECTIVE SOON',
        notificationOn: true,
        startDate: '2019-1-2',
        EndDate: '2020-1-2',
      },
      {
        name: 'coupon3',
        description: 'coupon3 description',
        status: 'EFFECTIVE',
        notificationOn: false,
        startDate: '2019-1-3',
        EndDate: '2020-1-3',
      },
    ];

    return of(mockCoupons);
  }

  getCoupons(userId: string): Observable<any[]> {
    const url = this.getUserEndpoint(userId) + this.COUPONS_ENDPOINT;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http
      .get<any>(url, { headers })
      .pipe(catchError((error: any) => throwError(error)));
  }

  private getUserEndpoint(userId: string): string {
    const endpoint = this.USER_ENDPOINT + userId;
    return this.occEndpoints.getEndpoint(endpoint);
  }

  sortChange(sort: string): void {
    this.sort = sort;

    // this.interestsService.loadProductInterests(
    //   this.userId,
    //   this.PAGE_SIZE,
    //   0,
    //   this.sortMapping[sort]
    // );
  }

  pageChange(page: number): void {
    page = page + 1;
    // this.interestsService.loadProductInterests(
    //   this.userId,
    //   this.PAGE_SIZE,
    //   page,
    //   this.sortMapping[this.sort]
    // );
  }
}
