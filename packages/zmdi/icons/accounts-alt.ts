import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiAccountsAltIcon],svg[zmdi-accounts-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M309 192q-22 0-37.5-15.5T256 139t15.5-38T309 85t37.5 16t15.5 38t-15.5 37.5T309 192m-159.5-21q-26.5 0-45.5-19t-19-45.5t19-45T149.5 43t45 18.5t18.5 45t-18.5 45.5t-45 19m160 64q36.5 0 77 16t40.5 42v48H192v-48q0-26 40.5-42t77-16M149 213q22 0 51 6q-51 28-51 74v48H0v-53q0-23 27.5-41t61-26t60.5-8"></svg:path>`,
})
export class ZmdiAccountsAltIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
