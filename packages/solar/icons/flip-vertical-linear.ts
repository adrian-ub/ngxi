import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarFlipVerticalLinearIcon],svg[solar-flip-vertical-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5.886 2h12.227c1.703 0 2.554 0 2.833.542c.279.543-.216 1.235-1.205 2.62l-1.13 1.582c-.44.616-.66.924-.983 1.09S16.928 8 16.17 8H7.83c-.757 0-1.136 0-1.459-.166s-.543-.474-.983-1.09l-1.13-1.582c-.989-1.385-1.483-2.077-1.204-2.62C3.333 2 4.184 2 5.886 2Zm0 20h12.227c1.703 0 2.554 0 2.833-.542c.279-.543-.216-1.235-1.205-2.62l-1.13-1.582c-.44-.616-.66-.924-.983-1.09S16.928 16 16.17 16H7.83c-.757 0-1.136 0-1.459.166s-.543.474-.983 1.09l-1.13 1.581c-.989 1.386-1.483 2.078-1.204 2.62S4.184 22 5.886 22Z"></svg:path><svg:path stroke-linecap="round" d="M10 12h4m4 0h4M2 12h4"></svg:path></svg:g>`,
})
export class SolarFlipVerticalLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
