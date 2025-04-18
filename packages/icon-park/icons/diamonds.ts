import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDiamondsIcon],svg[icon-park-diamonds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M12 8H36L44 18L24 42L4 18L12 8Z"></svg:path><svg:path stroke="#fff" d="M4 18L44 18"></svg:path><svg:path stroke="#fff" d="M24 42L16 18"></svg:path><svg:path stroke="#fff" d="M24 42L32 18"></svg:path><svg:path stroke="#000" d="M8 13L4 18L24 42L44 18L40 13"></svg:path></svg:g>`,
})
export class IconParkDiamondsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
