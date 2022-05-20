import { Request, Pagination, Total } from './types'

export interface LoginLogData {
  id: number
  account: string
  remoteAddr: string
  userAgent: string
  referer: string
  reason: string
  loginTime: string
}

export class LoginLogList extends Request {
  readonly url = '/log/getLoginLogList'
  readonly method = 'get'

  public pagination: Pagination

  public param: {
    account: string
  }

  public declare datagram: {
    list: LoginLogData[]
  }
  constructor(param: LoginLogList['param'], pagination: Pagination) {
    super()
    this.pagination = pagination
    this.param = { ...param, ...pagination }
  }
}

export class LoginLogTotal extends Request {
  readonly url = '/log/getLoginLogTotal'
  readonly method = 'get'

  public param: {
    account: string
  }

  public declare datagram: Total

  constructor(param: LoginLogTotal['param']) {
    super()
    this.param = param
  }
}
