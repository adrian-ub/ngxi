import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackMuIcon],svg[flagpack-mu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#579D20" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackMu0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g fill-rule="evenodd" clip-rule="evenodd" mask="url(#flagpackMu0)"><svg:path fill="#FECA00" d="M0 12v6h32v-6z"></svg:path><svg:path fill="#3D58DB" d="M0 6v6h32V6z"></svg:path><svg:path fill="#E11C1B" d="M0 0v6h32V0z"></svg:path></svg:g></svg:g>`,
})
export class FlagpackMuIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
