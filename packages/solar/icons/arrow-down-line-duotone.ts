import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarArrowDownLineDuotoneIcon],svg[solar-arrow-down-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M12.75 4a.75.75 0 0 0-1.5 0zm-1.5 0v16h1.5V4z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m18 14l-6 6l-6-6"></svg:path></svg:g>`,
})
export class SolarArrowDownLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
