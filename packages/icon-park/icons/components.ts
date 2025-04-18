import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkComponentsIcon],svg[icon-park-components-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M17 11L24 4L31 11L24 18L17 11Z"></svg:path><svg:path d="M30 25L37 18L44 25L37 32L30 25Z"></svg:path><svg:path d="M17 37L24 30L31 37L24 44L17 37Z"></svg:path><svg:path d="M4 24L11 17L18 24L11 31L4 24Z"></svg:path></svg:g>`,
})
export class IconParkComponentsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
