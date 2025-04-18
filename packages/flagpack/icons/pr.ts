import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackPrIcon],svg[flagpack-pr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#EF0000" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackPr0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g mask="url(#flagpackPr0)"><svg:path fill="#EF0000" stroke="#F7FCFF" stroke-width="4" d="M0 8h-2v8h36V8z"></svg:path></svg:g><svg:path fill="#3D58DB" fill-rule="evenodd" d="M0 0v24l18-12z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackPr1" width="18" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24l18-12z" clip-rule="evenodd"></svg:path></svg:mask><svg:g mask="url(#flagpackPr1)"><svg:path fill="#F7FCFF" fill-rule="evenodd" d="m6.688 14.217l-3.672 1.938l1.787-3.894l-2.277-2.08l2.812-.104l1.35-3.52l1.03 3.52h2.807l-1.87 2.184l1.488 3.894z" clip-rule="evenodd"></svg:path></svg:g></svg:g>`,
})
export class FlagpackPrIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
