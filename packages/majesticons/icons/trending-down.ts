import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsTrendingDownIcon],svg[majesticons-trending-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M3.707 6.293a1 1 0 0 0-1.414 1.414l6 6a1 1 0 0 0 1.414 0L13 10.414l3.086 3.086l-2.793 2.793A1 1 0 0 0 14 18h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1.707-.707L17.5 12.086l-3.793-3.793a1 1 0 0 0-1.414 0L9 11.586L3.707 6.293z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsTrendingDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
