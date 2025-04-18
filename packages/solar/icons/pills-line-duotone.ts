import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarPillsLineDuotoneIcon],svg[solar-pills-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M17.845 6.155s-.433 2.245-2.94 4.751c-2.505 2.506-4.75 2.938-4.75 2.938m10.253 2.563a5.437 5.437 0 0 1-7.69 0l-5.126-5.126a5.437 5.437 0 1 1 7.69-7.689l5.125 5.126a5.437 5.437 0 0 1 0 7.69Z"></svg:path><svg:path stroke-linecap="round" d="M14.5 6.5L13 5" opacity=".5"></svg:path><svg:path d="M6.73 10.135a6 6 0 1 0 7.143 7.098" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPillsLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
