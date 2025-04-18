import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSun2LineDuotoneIcon],svg[solar-sun-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="5"></svg:circle><svg:path stroke-linecap="round" d="M12 2v2m0 16v2M4 12H2m20 0h-2"></svg:path><svg:path stroke-linecap="round" d="m19.778 4.223l-2.222 2.031M4.222 4.223l2.222 2.031m0 11.302l-2.222 2.222m15.556-.001l-2.222-2.222" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSun2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
