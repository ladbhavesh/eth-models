
export enum HttpMethod {
    GET = 1,
    POST = 2,
    PATCH = 3,
    PUT = 4,
    DELETE = 5
    
}

export class RouteDetail{

    method:HttpMethod = HttpMethod.GET;
    route:string = "";

    
   constructor(method:HttpMethod, route:string){
       this.method = method;
       this.route = `/api${route}`;
   }
    
}

    var routeConfig = {
     routeAccountsUpdate : new RouteDetail(HttpMethod.POST,"/accounts/update"),
     routeAccountsSave2 : new RouteDetail(HttpMethod.POST,"/accounts/save2"),
     routeAccounts2 : new RouteDetail(HttpMethod.GET,'/accounts2'),
     routecreateCrowdsale:  new RouteDetail(HttpMethod.POST,'/createCrowdsale'),
     routeIcos : new RouteDetail(HttpMethod.GET,'/icos'),
     routeDeployIco : new RouteDetail(HttpMethod.POST,'/deployIco'),
     routeGetIcoDeploymentStatus: new RouteDetail(HttpMethod.GET,'/getIcoDeploymentStatus/:id'),
     routeIcoDeployment : new RouteDetail(HttpMethod.GET,'/ico/deployments/:id'),
     routeIcoDetail : new RouteDetail(HttpMethod.GET,'/ico/detail/:id'),
     routeRegisterUser : new RouteDetail(HttpMethod.POST,'/user/register'),
     routeUserLogin : new RouteDetail(HttpMethod.POST,'/user/login'),
     routeGetDeploymentQueueItem : new RouteDetail(HttpMethod.GET,'/deployment/queueitem'),
     routeSaveDeploymentQueueItem : new RouteDetail(HttpMethod.POST,'/deployment/queueitem'),
     routeSolidityImport:  new RouteDetail(HttpMethod.POST,'/solidity/import'),
     routeUsers : new RouteDetail(HttpMethod.GET,'/users'),
     routeAllIco: new RouteDetail(HttpMethod.GET,'/allico'),
     routeUserIcos: new RouteDetail(HttpMethod.GET,'/usericos/:id'),
     routeChangeUserStatus: new RouteDetail(HttpMethod.PATCH,'/changeUserStatus/:id')



    }




//RouteDetail;
export default routeConfig;