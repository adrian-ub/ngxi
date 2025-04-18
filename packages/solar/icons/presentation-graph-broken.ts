import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarPresentationGraphBrokenIcon],svg[solar-presentation-graph-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2 2h20M9 10.5l1.293-1.293c.333-.333.5-.5.707-.5s.374.167.707.5l.586.586c.333.333.5.5.707.5s.374-.167.707-.5L15 8.5M12 21v-4m-2 5l2-1m2 1l-2-1"></svg:path><svg:path d="M4 2v8.5c0 3.064 0 4.596 1.004 5.548s2.62.952 5.853.952h2.286c3.232 0 4.849 0 5.853-.952S20 13.564 20 10.5V10m0-8v4"></svg:path></svg:g>`,
})
export class SolarPresentationGraphBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
