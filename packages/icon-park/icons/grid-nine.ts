import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkGridNineIcon],svg[icon-park-grid-nine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:rect width="38" height="38" x="5" y="5" stroke-linejoin="round" rx="2"></svg:rect><svg:path d="M5 18H43"></svg:path><svg:path d="M5 30H43"></svg:path><svg:path d="M17 5V43"></svg:path><svg:path d="M30 5V43"></svg:path></svg:g>`,
})
export class IconParkGridNineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
