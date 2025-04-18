import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFileFocusIcon],svg[icon-park-file-focus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"></svg:path><svg:path stroke="#000" d="M30 4L40 14"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M24 19L26.5234 24.5269L32.5595 25.2188L28.0829 29.3266L29.2901 35.2812L24 32.293L18.7099 35.2812L19.9171 29.3266L15.4405 25.2188L21.4766 24.5269L24 19Z"></svg:path></svg:g>`,
})
export class IconParkFileFocusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
