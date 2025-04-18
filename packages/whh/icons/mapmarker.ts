import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhMapmarkerIcon],svg[whh-mapmarker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m657 680l-272 345l-272-345q-73-76-99.5-178.5t0-205t100-179T286 14t198 0t172.5 103.5t100 179t0 205T657 680M385.5 130Q279 130 204 205t-75 181t75 180.5T385.5 641T567 566.5T642 386t-75-181t-181.5-75"></svg:path>`,
})
export class WhhMapmarkerIcon {
  readonly viewBox = input("0 0 770 1025")
  readonly width = input("0.76em")
  readonly height = input("1em")
}
