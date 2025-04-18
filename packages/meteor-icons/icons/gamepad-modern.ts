import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsGamepadModernIcon],svg[meteor-icons-gamepad-modern-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 16h6a1 1 0 0 0 0-12H9a6 6 0 0 0-5.9 5l-1.9 6.9A3 3 0 0 0 6 19.2Zm6 0l3 3.3a3 3 0 0 0 4.8-3.4L20.9 9M8 8v4m-2-2h4m5 0h2"></svg:path>`,
})
export class MeteorIconsGamepadModernIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
