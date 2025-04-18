import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsWebcamIcon],svg[flat-color-icons-webcam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#455A64" d="M36.5 44h-25c-1.1 0-1.8-1.2-1.3-2.2L13 37h22l2.7 4.8c.6 1-.1 2.2-1.2 2.2"></svg:path><svg:circle cx="24" cy="23" r="18" fill="#78909C"></svg:circle><svg:path fill="#455A64" d="M24 35c-6.6 0-12-5.4-12-12s5.4-12 12-12s12 5.4 12 12s-5.4 12-12 12"></svg:path><svg:circle cx="24" cy="23" r="9" fill="#42A5F5"></svg:circle><svg:path fill="#90CAF9" d="M28.8 20c-1.2-1.4-3-2.2-4.8-2.2s-3.6.8-4.8 2.2c-.5.5-.4 1.3.1 1.8s1.3.4 1.8-.1c1.5-1.7 4.3-1.7 5.8 0c.3.3.6.4 1 .4q.45 0 .9-.3c.4-.4.5-1.3 0-1.8"></svg:path>`,
})
export class FlatColorIconsWebcamIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
