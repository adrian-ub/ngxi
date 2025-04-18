import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMailSearchIcon],svg[streamline-mail-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5 9.5H1.5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4"></svg:path><svg:path d="M.5 1.76L6.5 6l6-4.24M10 12.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m3.5 1l-1.73-1.73"></svg:path></svg:g>`,
})
export class StreamlineMailSearchIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
