import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginJourneyOutlineIcon],svg[bubbles-plugin-journey-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M10.25 19.248h13.5v4.5h-13.5zm0-7.5h13.5v4.5h-13.5zm-9-10.5h13.5v4.5H1.25z"></svg:path><svg:path d="M7.25 5.748v1.5a1.5 1.5 0 0 0 1.5 1.5h4.5a1.5 1.5 0 0 1 1.5 1.5v1.5m3 4.5v3"></svg:path></svg:g>`,
})
export class BubblesPluginJourneyOutlineIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
