import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidCodeLaptopIcon],svg[icon-park-solid-code-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M22 9H11a3 3 0 0 0-3 3v21h32V22"></svg:path><svg:path fill="currentColor" d="M4 33h40v2a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6z"></svg:path><svg:path stroke-linecap="round" d="m33 7l-4 4l4 4m6-8l4 4l-4 4"></svg:path></svg:g>`,
})
export class IconParkSolidCodeLaptopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
