import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackBfIcon],svg[flagpack-bf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#5EAA22" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackBf0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g fill-rule="evenodd" clip-rule="evenodd" mask="url(#flagpackBf0)"><svg:path fill="#C51918" d="M0 0v12h32V0z"></svg:path><svg:path fill="#FECA00" d="m16.035 15.77l-4.703 3.56l1.505-5.797l-4.41-3.53h5.257l2.35-5.145l2.352 5.146h5.257l-4.457 3.534l1.551 5.792z"></svg:path></svg:g></svg:g>`,
})
export class FlagpackBfIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
