import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSaveOneIcon],svg[icon-park-save-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M39.3 6H8.7C7.20883 6 6 7.20883 6 8.7V39.3C6 40.7912 7.20883 42 8.7 42H39.3C40.7912 42 42 40.7912 42 39.3V8.7C42 7.20883 40.7912 6 39.3 6Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linejoin="round" d="M32 6V24H15V6H32Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M26 13V17"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M10.9971 6H35.9986"></svg:path></svg:g>`,
})
export class IconParkSaveOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
