import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarVinylLineDuotoneIcon],svg[solar-vinyl-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="3"></svg:circle><svg:path stroke-linecap="round" d="M21.95 13c-.501 5.054-4.765 9-9.95 9c-5.523 0-10-4.477-10-10c0-5.185 3.947-9.448 9-9.95" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M15 2.457a10.02 10.02 0 0 1 6.542 6.542M15 12V2.456"></svg:path></svg:g>`,
})
export class SolarVinylLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
