export declare enum HttpMethod {
    GET = 1,
    POST = 2,
    PATCH = 3,
    PUT = 4,
    DELETE = 5
}
export declare class RouteDetail {
    method: HttpMethod;
    route: string;
    constructor(method: HttpMethod, route: string);
}
declare var routeConfig: {
    routeAccountsUpdate: RouteDetail;
    routeAccountsSave2: RouteDetail;
    routeAccounts2: RouteDetail;
    routecreateCrowdsale: RouteDetail;
    routeIcos: RouteDetail;
    routeDeployIco: RouteDetail;
    routeGetIcoDeploymentStatus: RouteDetail;
    routeIcoDeployment: RouteDetail;
    routeIcoDetail: RouteDetail;
    routeRegisterUser: RouteDetail;
    routeUserLogin: RouteDetail;
    routeGetDeploymentQueueItem: RouteDetail;
    routeSaveDeploymentQueueItem: RouteDetail;
    routeSolidityImport: RouteDetail;
    routeUsers: RouteDetail;
    routeAllIco: RouteDetail;
    routeUserIcos: RouteDetail;
    routeChangeUserStatus: RouteDetail;
};
export default routeConfig;
