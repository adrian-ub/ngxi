import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsRewindPrintIcon],svg[pepicons-rewind-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g opacity=".8"><svg:path d="M11.593 9.972a1 1 0 0 0 0 1.364l6.176 6.618c.62.663 1.731.225 1.731-.683V4.037c0-.908-1.112-1.346-1.731-.682l-6.176 6.617Z"></svg:path><svg:path d="M4.437 9.972a1 1 0 0 0 0 1.364l6.176 6.618c.62.663 1.73.225 1.73-.683V4.037c0-.908-1.11-1.346-1.73-.682L4.437 9.972Z"></svg:path></svg:g><svg:path fill-rule="evenodd" d="M16.6 16.616L10.424 10L16.6 3.382v13.234Zm-6.907-5.934a1 1 0 0 1 0-1.365L15.869 2.7c.62-.664 1.73-.226 1.73.682v13.234c0 .908-1.11 1.346-1.73.683l-6.176-6.617Z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M9.444 16.616L3.268 10l6.176-6.617v13.234Zm-6.907-5.934a1 1 0 0 1 0-1.365L8.713 2.7c.62-.664 1.73-.226 1.73.682v13.234c0 .908-1.11 1.346-1.73.683l-6.176-6.617Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsRewindPrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
