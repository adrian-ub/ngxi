import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laQuranIcon],svg[la-quran-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3C6.355 3 5 4.355 5 6v20c0 1.645 1.355 3 3 3h19V3zm0 2h17v18H8a3 3 0 0 0-1 .188V6c0-.566.434-1 1-1m0 1v16h16V6zm2 2h12v12H10zm6 1c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m0 2h-3v6h6v-6zm3 3c0 .55.45 1 1 1s1-.45 1-1s-.45-1-1-1s-1 .45-1 1m-3 3c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m-3-3c0-.55-.45-1-1-1s-1 .45-1 1s.45 1 1 1s1-.45 1-1m2-1h2v2h-2zM8 25h17v2H8c-.566 0-1-.434-1-1s.434-1 1-1"></svg:path>`,
})
export class LaQuranIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
