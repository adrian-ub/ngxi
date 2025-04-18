import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkWatermelonIcon],svg[icon-park-watermelon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M23 34C34.0457 34 43 25.0457 43 14H3C3 25.0457 11.9543 34 23 34Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M23 23V26"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16.6358 20.3638L14.5145 22.4851"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M29.3643 20.3642L31.4856 22.4855"></svg:path></svg:g>`,
})
export class IconParkWatermelonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
