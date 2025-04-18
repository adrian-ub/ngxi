import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRadarLineDuotoneIcon],svg[solar-radar-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 12L5.002 6.335c-.43-.347-1.063-.283-1.366.178a10 10 0 0 0-1.295 2.898C.91 14.746 4.077 20.23 9.41 21.66c5.336 1.43 10.819-1.737 12.248-7.071C23.09 9.253 19.923 3.77 14.59 2.34a9.97 9.97 0 0 0-7.502.95"></svg:path>`,
})
export class SolarRadarLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
