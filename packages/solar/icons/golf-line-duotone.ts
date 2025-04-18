import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarGolfLineDuotoneIcon],svg[solar-golf-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:ellipse cx="12" cy="18.5" opacity=".5" rx="10" ry="3.5"></svg:ellipse><svg:path stroke-linecap="round" d="M12 18V2m0 1.5l5.422 2.711c1.561.78 2.342 1.171 2.342 1.789s-.78 1.008-2.342 1.789L12 12.5"></svg:path></svg:g>`,
})
export class SolarGolfLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
