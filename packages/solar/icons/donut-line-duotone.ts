import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarDonutLineDuotoneIcon],svg[solar-donut-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:circle cx="12" cy="12" r="3"></svg:circle><svg:path d="M2 13s2.2 2 4 2c1.212 0 2.606-.908 3.387-1.5m4.613.724c.471.415 1.088.776 1.805.776c1.69 0 1.69-2 3.38-2c1.077 0 1.925.814 2.399 1.403" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M14.5 7L16 5"></svg:path><svg:path stroke-linecap="round" d="m19 7l1-1" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="m12 5l-1-1"></svg:path><svg:path stroke-linecap="round" d="m10.5 7l-1.366.366m7.516 1.611l.066 1.412" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M20.678 10.085L19 11.563"></svg:path><svg:path stroke-linecap="round" d="M7 5L6 4" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="m6.792 9.144l-.585-1.288m-.542 4.786L6.5 11.5"></svg:path><svg:path stroke-linecap="round" d="m3.683 10.35l-.079-1.412" opacity=".5"></svg:path></svg:g>`,
})
export class SolarDonutLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
