import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiMoneyBoxIcon],svg[zmdi-money-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 299v-22h-43v-42h86v-22h-64q-9 0-15.5-6t-6.5-15v-64q0-9 6.5-15t15.5-6h21V85h43v22h42v42h-85v22h64q9 0 15 6t6 15v64q0 9-6 15t-15 6h-21v22zM384 21q18 0 30.5 12.5T427 64v256q0 18-12.5 30.5T384 363H43q-18 0-30.5-12.5T0 320V64q0-18 12.5-30.5T43 21zm0 299V64H43v256z"></svg:path>`,
})
export class ZmdiMoneyBoxIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
