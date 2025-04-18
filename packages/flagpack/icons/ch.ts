import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackChIcon],svg[flagpack-ch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#E31D1C" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackCh0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g mask="url(#flagpackCh0)"><svg:path fill="#F1F9FF" fill-rule="evenodd" d="M18 6h-4v4h-4v4h4v4h4v-4h4v-4h-4z" clip-rule="evenodd"></svg:path></svg:g></svg:g>`,
})
export class FlagpackChIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
