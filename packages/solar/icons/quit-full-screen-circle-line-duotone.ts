import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarQuitFullScreenCircleLineDuotoneIcon],svg[solar-quit-full-screen-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M9.998 6c-.015 1.707-.11 2.648-.73 3.268s-1.561.716-3.268.73m3.998 7.999c-.015-1.706-.11-2.647-.73-3.267S7.707 14.014 6 14m8-8c.014 1.707.11 2.648.73 3.268s1.56.716 3.267.73M14 17.997c.014-1.706.11-2.647.73-3.267s1.56-.716 3.267-.73"></svg:path><svg:circle cx="12" cy="12" r="10" opacity=".5"></svg:circle></svg:g>`,
})
export class SolarQuitFullScreenCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
