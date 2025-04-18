import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAreaMapIcon],svg[icon-park-area-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M18 24L12 33L4 28.5V42H44V15L37 23L31 18L24 26L18 24Z"></svg:path><svg:path d="M4 28.5V17L11 23L16.5 15L22.5 18L31 9L36.5 13.5L44 6V15.5"></svg:path></svg:g>`,
})
export class IconParkAreaMapIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
