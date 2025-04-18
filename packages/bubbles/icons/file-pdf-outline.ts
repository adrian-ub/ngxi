import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesFilePdfOutlineIcon],svg[bubbles-file-pdf-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M5.246 23.248h-3a1.5 1.5 0 0 1-1.5-1.5v-19.5a1.5 1.5 0 0 1 1.5-1.5h10.629a1.5 1.5 0 0 1 1.061.44l5.871 5.871a1.5 1.5 0 0 1 .439 1.061v4.628"></svg:path><svg:path d="M20.246 8.248h-6a1.5 1.5 0 0 1-1.5-1.5v-6m-4.5 22.5v-7.5m0 0H9a2.25 2.25 0 0 1 0 4.5h-.75m5.996 3a3 3 0 0 0 3-3v-1.5a3 3 0 0 0-3-3zm6 0v-6a1.5 1.5 0 0 1 1.5-1.5h1.5m-3 4.5h2.25"></svg:path></svg:g>`,
})
export class BubblesFilePdfOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
