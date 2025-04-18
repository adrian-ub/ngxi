import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineZodiac12SolidIcon],svg[streamline-zodiac-12-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.308 2.53a1.308 1.308 0 1 0 0 2.616a1.308 1.308 0 0 0 0-2.615ZM0 3.84A3.31 3.31 0 0 1 3.308.53H13a1 1 0 1 1 0 2H6.347A3.308 3.308 0 1 1 0 3.839Zm10.692 5.015a1.308 1.308 0 0 0-.008 2.615h.014a1.308 1.308 0 0 0-.006-2.615m-3.307 1.308c0 .464.095.906.268 1.307H1a1 1 0 0 0 0 2h9.692a3.308 3.308 0 1 0-3.307-3.307" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineZodiac12SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
