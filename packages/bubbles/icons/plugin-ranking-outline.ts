import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginRankingOutlineIcon],svg[bubbles-plugin-ranking-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M17 14.5v-10a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v6H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h21a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1z"></svg:path><svg:path d="M11.5 6.5h.5a.5.5 0 0 1 .5.5v3.5m-1 0h2m-5.5 0v11m9-7v7"></svg:path></svg:g>`,
})
export class BubblesPluginRankingOutlineIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
