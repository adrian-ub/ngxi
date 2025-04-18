import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFileFocusOneIcon],svg[icon-park-file-focus-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H22"></svg:path><svg:path fill="#2F88FF" d="M34 27L36.5234 32.5269L42.5595 33.2188L38.0829 37.3266L39.2901 43.2812L34 40.293L28.7099 43.2812L29.9171 37.3266L25.4405 33.2188L31.4766 32.5269L34 27Z"></svg:path><svg:path d="M30 4V14H40"></svg:path></svg:g>`,
})
export class IconParkFileFocusOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
