import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneDisabledLaptopIcon],svg[icon-park-twotone-disabled-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTDisabledLaptop0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M23 8.999H11a3 3 0 0 0-3 3v21h32v-7"></svg:path><svg:path fill="#555" stroke-linejoin="round" d="M4 32.999h40v2a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6z"></svg:path><svg:circle cx="36" cy="13" r="6"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m32 9l8 8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTDisabledLaptop0)"></svg:path>`,
})
export class IconParkTwotoneDisabledLaptopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
