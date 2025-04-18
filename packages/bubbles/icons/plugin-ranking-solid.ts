import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginRankingSolidIcon],svg[bubbles-plugin-ranking-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 4.5v10h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-21a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h6v-6a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1m-6.25 2a.75.75 0 0 1 .75-.75h.5A1.25 1.25 0 0 1 13.75 7v2.75H14a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2.5H12a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class BubblesPluginRankingSolidIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
