import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesFileCsvOutlineIcon],svg[bubbles-file-csv-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M5.251 23.254h-3a1.5 1.5 0 0 1-1.5-1.5v-19.5a1.5 1.5 0 0 1 1.5-1.5H12.88a1.5 1.5 0 0 1 1.06.439l5.872 5.87a1.5 1.5 0 0 1 .439 1.062v4.629"></svg:path><svg:path d="M20.251 8.254h-6a1.5 1.5 0 0 1-1.5-1.5v-6m-1.5 15a3 3 0 0 0-3 3v1.5a3 3 0 0 0 3 3m6-7.5h-1.5a1.5 1.5 0 0 0-1.5 1.5c0 2.25 3 2.25 3 4.5a1.5 1.5 0 0 1-1.5 1.5h-1.5m6-7.5V18.3c0 1.763.522 3.488 1.5 4.955a8.94 8.94 0 0 0 1.5-4.955v-2.546"></svg:path></svg:g>`,
})
export class BubblesFileCsvOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
