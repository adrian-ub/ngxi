import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFeelgoodOneIcon],svg[icon-park-feelgood-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M44 6H4V36H25L35 41V36H44V6Z"></svg:path><svg:path stroke="#fff" d="M13 23C13 23 17 27 24 27C31 27 35 23 35 23"></svg:path></svg:g>`,
})
export class IconParkFeelgoodOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
