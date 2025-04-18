import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginTransactionalSolidIcon],svg[bubbles-plugin-transactional-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.25 1.246H.75v19.5h19.5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 23.746h18a1.5 1.5 0 0 0 1.5-1.5v-18"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1.125 1.5H20.25v19.246H1.125zM16.5 8.746v6a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-6a2.25 2.25 0 0 1 2.25-2.25h7.5a2.25 2.25 0 0 1 2.25 2.25M6 10.096v4.65a.75.75 0 0 0 .75.75h7.5a.75.75 0 0 0 .75-.75v-4.65l-3.307 2.059h-.001a2.25 2.25 0 0 1-2.384 0zm8.78-1.88a.75.75 0 0 0-.53-.22h-7.5a.75.75 0 0 0-.658.39l4.01 2.496v.001a.75.75 0 0 0 .796 0l4.01-2.496a.8.8 0 0 0-.128-.171" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class BubblesPluginTransactionalSolidIcon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
