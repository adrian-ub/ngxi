import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarFlipVerticalLineDuotoneIcon],svg[solar-flip-vertical-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5.886 2h12.228c1.702 0 2.553 0 2.832.542c.28.543-.216 1.235-1.205 2.62l-1.13 1.582c-.44.616-.66.924-.982 1.09C17.306 8 16.927 8 16.17 8H7.83c-.757 0-1.136 0-1.459-.166s-.543-.474-.983-1.09l-1.13-1.582c-.988-1.385-1.483-2.077-1.204-2.62C3.334 2 4.184 2 5.886 2Zm0 20h12.228c1.702 0 2.553 0 2.832-.542c.28-.543-.216-1.235-1.205-2.62l-1.13-1.582c-.44-.616-.66-.924-.982-1.09C17.306 16 16.927 16 16.17 16H7.83c-.757 0-1.136 0-1.459.166s-.543.474-.983 1.09l-1.13 1.581c-.988 1.386-1.483 2.078-1.204 2.62S4.184 22 5.886 22Z"></svg:path><svg:path stroke-linecap="round" d="M10 12h4m4 0h4M2 12h4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarFlipVerticalLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
