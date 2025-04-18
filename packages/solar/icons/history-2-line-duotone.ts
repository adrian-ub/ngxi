import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarHistory2LineDuotoneIcon],svg[solar-history-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2"></svg:path><svg:path stroke-linejoin="round" d="M12 9v4h4" opacity=".5"></svg:path><svg:circle cx="12" cy="12" r="10" stroke-dasharray=".5 3.5" opacity=".5"></svg:circle></svg:g>`,
})
export class SolarHistory2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
