import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBagAltDuotoneLineIcon],svg[lets-icons-bag-alt-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsBagAltDuotoneLine0"><svg:g fill="none"><svg:path stroke="silver" stroke-opacity=".25" d="M4.431 14.912c.488-2.926.732-4.389 1.701-5.31q.167-.159.35-.298C7.552 8.5 9.035 8.5 12 8.5s4.449 0 5.517.804q.184.14.351.297c.97.922 1.213 2.385 1.7 5.31l.544 3.26c.18 1.081.27 1.622-.03 1.975c-.299.354-.847.354-1.943.354H5.861c-1.096 0-1.644 0-1.944-.354c-.3-.353-.209-.894-.029-1.975z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M8.5 11V7.5A3.5 3.5 0 0 1 12 4v0a3.5 3.5 0 0 1 3.5 3.5V11"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsBagAltDuotoneLine0)"></svg:path>`,
})
export class LetsIconsBagAltDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
