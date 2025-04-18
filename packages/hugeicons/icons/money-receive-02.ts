import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMoneyReceive02Icon],svg[hugeicons-money-receive-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 5.442s2-1.003 3.241.013c.202.163.454.487.565.724C22 6.596 22 7 22 7.81v11.009c0 1.006-1.04 1.697-2 1.473a13.2 13.2 0 0 0-3-.335c-1.917 0-3.668.386-5 1.022S8.917 22 7 22c-1.066 0-2.08-.12-3-.334c-.591-.139-.887-.208-1.241-.494a2.4 2.4 0 0 1-.565-.725C2 20.03 2 19.626 2 18.817V7.81c0-1.008 1.04-1.7 2-1.474c.775.181 1.617.294 2.5.325"></svg:path><svg:path d="M14.5 13.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-9 1v.009m13-2.017v.01M9.5 5.5C9.992 6.006 11.3 8 12 8m2.5-2.5C14.008 6.006 12.7 8 12 8m0 0V2"></svg:path></svg:g>`,
})
export class HugeiconsMoneyReceive02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
