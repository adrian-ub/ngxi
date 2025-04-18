import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorArrowSync16Icon],svg[fluent-color-arrow-sync-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorArrowSync160)" d="M6.97.47a.75.75 0 0 1 1.06 0l1.75 1.75a.75.75 0 0 1 0 1.06L8.03 5.03a.75.75 0 0 1-1.06-1.06l.43-.43a4.5 4.5 0 0 0-2.28 7.918a.75.75 0 0 1-.961 1.152A6 6 0 0 1 7.463 2.024L6.97 1.53a.75.75 0 0 1 0-1.06m3.815 3.016a.75.75 0 0 1 1.056-.096a6 6 0 0 1-3.304 10.586l.493.494a.75.75 0 1 1-1.06 1.06l-1.75-1.75a.75.75 0 0 1 0-1.06l1.75-1.75a.75.75 0 0 1 1.06 1.06l-.43.43a4.5 4.5 0 0 0 2.28-7.918a.75.75 0 0 1-.095-1.056"></svg:path><svg:defs><svg:lineargradient id="fluentColorArrowSync160" x1="11.2" x2="4.8" y1="13.037" y2=".25" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#22918B"></svg:stop><svg:stop offset="1" stop-color="#20AC9D"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorArrowSync16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
