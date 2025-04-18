import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLaptopIcon],svg[icon-park-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="32" height="20" x="8" y="8" fill="#2F88FF"></svg:rect><svg:path d="M8 28L4 41H44L40 28"></svg:path><svg:path fill="#2F88FF" d="M19.9 35H28.1L30 41H18L19.9 35Z"></svg:path></svg:g>`,
})
export class IconParkLaptopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
