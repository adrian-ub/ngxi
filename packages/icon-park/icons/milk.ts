import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMilkIcon],svg[icon-park-milk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M12 19.5736C12 19.1988 12.1053 18.8315 12.304 18.5136L17 11H31L35.696 18.5136C35.8947 18.8315 36 19.1988 36 19.5736V42C36 43.1046 35.1046 44 34 44H14C12.8954 44 12 43.1046 12 42V19.5736Z"></svg:path><svg:path stroke="#fff" d="M19 33V24L24 30L29 24V33"></svg:path><svg:path stroke="#000" d="M17 4H31V11H17V4Z"></svg:path></svg:g>`,
})
export class IconParkMilkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
