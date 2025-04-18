import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackScIcon],svg[flagpack-sc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2E42A5" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:mask id="flagpackSc0" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><svg:path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path></svg:mask><svg:g mask="url(#flagpackSc0)"><svg:path fill="#FFD018" fill-rule="evenodd" d="M0 23.997L16.151-2h16.151z" clip-rule="evenodd"></svg:path><svg:path fill="#E31D1C" d="m0 23.997l34.463-12.999V-5.103z"></svg:path><svg:path fill="#F7FCFF" d="m0 23.997l34.463-4.999v-8.101z"></svg:path><svg:path fill="#5EAA22" fill-rule="evenodd" d="M0 23.997h34.463v-7.1z" clip-rule="evenodd"></svg:path></svg:g></svg:g>`,
})
export class FlagpackScIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
