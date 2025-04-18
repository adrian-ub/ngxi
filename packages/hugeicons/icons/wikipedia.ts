import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWikipediaIcon],svg[hugeicons-wikipedia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="M5 8h1.05m0 0H7m-.95 0l2.577 6.82C9.177 16.275 9.451 17 9.9 17c.45 0 .724-.726 1.273-2.18L13.75 8h.75m-5 0h.75l2.577 6.82c.55 1.454.824 2.18 1.273 2.18c.45 0 .724-.726 1.273-2.18L17.95 8m0 0H17m.95 0H19"></svg:path></svg:g>`,
})
export class HugeiconsWikipediaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
