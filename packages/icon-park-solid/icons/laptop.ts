import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidLaptopIcon],svg[icon-park-solid-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M8 8h32v20H8z"></svg:path><svg:path d="M8 28L4 41h40l-4-13"></svg:path><svg:path fill="currentColor" d="M19.9 35h8.2l1.9 6H18z"></svg:path></svg:g>`,
})
export class IconParkSolidLaptopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
