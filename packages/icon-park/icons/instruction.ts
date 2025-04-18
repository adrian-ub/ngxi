import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkInstructionIcon],svg[icon-park-instruction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:rect width="40" height="32" x="4" y="8" stroke-linejoin="round" rx="2"></svg:rect><svg:path fill="#2F88FF" stroke-linejoin="round" d="M4 10C4 8.89543 4.89543 8 6 8H42C43.1046 8 44 8.89543 44 10V16H4V10Z"></svg:path><svg:path d="M25 23L23 34"></svg:path><svg:path stroke-linejoin="round" d="M31 23L37 28L31 34"></svg:path><svg:path stroke-linejoin="round" d="M17 22.9999L11 27.9999L17 33.9999"></svg:path></svg:g>`,
})
export class IconParkInstructionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
