import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarColourTuneingLineDuotoneIcon],svg[solar-colour-tuneing-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2 12h7.5M22 12h-7.5" opacity=".5"></svg:path><svg:path d="M20 15.684C20 19 17.735 22 16 22c-2.268 0-3.928-3.158-3.928-10S10.412 2 8.144 2c-1.734 0-4 3-4 6.316"></svg:path></svg:g>`,
})
export class SolarColourTuneingLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
