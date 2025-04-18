import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsFeedbackIcon],svg[flat-color-icons-feedback-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#78909C" d="M40 41H8c-2.2 0-4-1.8-4-4V16.1c0-1.3.6-2.5 1.7-3.3L24 0l18.3 12.8c1.1.7 1.7 2 1.7 3.3V37c0 2.2-1.8 4-4 4"></svg:path><svg:path fill="#fff" d="M12 11h24v22H12z"></svg:path><svg:path fill="#9C27B0" d="m24 13.6l-6 7.8h12z"></svg:path><svg:path fill="#CFD8DC" d="M40 41H8c-2.2 0-4-1.8-4-4V17l20 13l20-13v20c0 2.2-1.8 4-4 4"></svg:path><svg:path fill="#9C27B0" d="m24 28l2-1.3V20h-4v6.7z"></svg:path>`,
})
export class FlatColorIconsFeedbackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
