import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarPodcastLineDuotoneIcon],svg[solar-podcast-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M9 10a3 3 0 1 1 6 0v3a3 3 0 1 1-6 0z"></svg:path><svg:path stroke-linecap="round" d="M13 10h2m-2 3h2m-6-3h1m-1 3h1" opacity=".5"></svg:path><svg:path d="M4.154 16C5.174 16 6 15.173 6 14.154V10a6 6 0 1 1 12 0v4.154c0 1.02.826 1.846 1.846 1.846" opacity=".5"></svg:path><svg:path d="M2 12a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0zm16 0a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0z"></svg:path><svg:path stroke-linecap="round" d="M12 16v3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPodcastLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
