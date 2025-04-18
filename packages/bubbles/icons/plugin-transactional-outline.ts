import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginTransactionalOutlineIcon],svg[bubbles-plugin-transactional-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M20.25 1.246H.75v19.5h19.5z"></svg:path><svg:path d="M3.75 23.746h18a1.5 1.5 0 0 0 1.5-1.5v-18"></svg:path><svg:path d="M5.25 8.746v6a1.5 1.5 0 0 0 1.5 1.5h7.5a1.5 1.5 0 0 0 1.5-1.5v-6"></svg:path><svg:path d="M5.25 8.746a1.5 1.5 0 0 1 1.5-1.5h7.5a1.5 1.5 0 0 1 1.5 1.5l-4.455 2.773a1.5 1.5 0 0 1-1.59 0z"></svg:path></svg:g>`,
})
export class BubblesPluginTransactionalOutlineIcon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
