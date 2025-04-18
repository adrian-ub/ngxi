import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laPrintIcon],svg[la-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4v7H7c-1.645 0-3 1.355-3 3v10h5v4h14v-4h5V14c0-1.645-1.355-3-3-3h-2V4zm2 2h10v5H11zm-4 7h18c.566 0 1 .434 1 1v8h-3v-4H9v4H6v-8c0-.566.434-1 1-1m1 1c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m3 6h10v6H11z"></svg:path>`,
})
export class LaPrintIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
