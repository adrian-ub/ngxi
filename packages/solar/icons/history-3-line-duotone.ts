import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarHistory3LineDuotoneIcon],svg[solar-history-3-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-dasharray=".5 3.5" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Z" opacity=".5"></svg:path><svg:path d="M22 12c0-5.523-4.477-10-10-10"></svg:path><svg:path stroke-linejoin="round" d="M12 9v4h4"></svg:path></svg:g>`,
})
export class SolarHistory3LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
