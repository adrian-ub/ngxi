import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidGraphCuredStableIcon],svg[covid-graph-cured-stable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.787 22.5h-21v-21"></svg:path><svg:path d="M16.537 6a1 1 0 0 0-1-1h-2.5V2.5a1 1 0 0 0-1-1h-1.5a1 1 0 0 0-1 1V5h-2.5a1 1 0 0 0-1 1v1.5a1 1 0 0 0 1 1h2.5V11a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1V8.5h2.5a1 1 0 0 0 1-1zm4.285 9.234l2.391 2.391l-2.391 2.391"></svg:path><svg:path d="M.787 17.625h.5a10.6 10.6 0 0 0 4.737-1.118L8.446 15.3a6.35 6.35 0 0 1 5.683 0l2.422 1.211a10.6 10.6 0 0 0 4.736 1.118h1.926"></svg:path></svg:g>`,
})
export class CovidGraphCuredStableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
