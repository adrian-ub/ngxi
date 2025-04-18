import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsWifi16SolidIcon],svg[heroicons-wifi-16-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.188 7.063a8.75 8.75 0 0 0-12.374 0a.75.75 0 0 1-1.061-1.06c4.003-4.004 10.493-4.004 14.496 0a.75.75 0 1 1-1.061 1.06m-2.121 2.121a5.75 5.75 0 0 0-8.132 0a.75.75 0 0 1-1.06-1.06a7.25 7.25 0 0 1 10.252 0a.75.75 0 0 1-1.06 1.06m-2.122 2.122a2.75 2.75 0 0 0-3.889 0a.75.75 0 1 1-1.06-1.061a4.25 4.25 0 0 1 6.01 0a.75.75 0 0 1-1.06 1.06m-2.828 1.06a1.25 1.25 0 0 1 1.768 0a.75.75 0 0 1 0 1.06l-.355.355a.75.75 0 0 1-1.06 0l-.354-.354a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsWifi16SolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
