import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGesturePressIcon],svg[tdesign-gesture-press-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2.5a5 5 0 0 1 3.985 8.02h-1.23V7.566a2.756 2.756 0 1 0-5.511 0v4.107A5 5 0 0 1 11 2.5m5.911 8.75a7 7 0 1 0-8.667 2.686v1.168l-2.145-.477a1.88 1.88 0 0 0-1.971.792l-.941 1.412l4.298 5.592a2.76 2.76 0 0 0 2.185 1.076h7.086c1.187 0 2.24-.76 2.615-1.885l1.783-5.35a2.76 2.76 0 0 0-1.226-3.253zM11 6.81c.417 0 .755.338.755.756v4.954h3.159a.76.76 0 0 1 .381.103l3.625 2.115c.309.18.45.553.336.893l-1.782 5.35a.76.76 0 0 1-.718.518H9.67a.76.76 0 0 1-.6-.295l-3.425-4.456l.1-.15l4.499 1V7.565c0-.418.338-.756.756-.756"></svg:path>`,
})
export class TdesignGesturePressIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
