import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPersonArmsSpreadFillIcon],svg[ph-person-arms-spread-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 36a28 28 0 1 1 28 28a28 28 0 0 1-28-28m127.6 56.57A15.7 15.7 0 0 0 212 80H44a16 16 0 0 0-6.7 30.53h.06l53.89 23.73l-21.92 83.3a16 16 0 0 0 7.9 20.91A15.8 15.8 0 0 0 84 240a16 16 0 0 0 14.44-9.06L128 180l29.58 51a16 16 0 0 0 29.07-13.35l-21.92-83.3l54-23.76a15.7 15.7 0 0 0 8.87-18.02"></svg:path>`,
})
export class PhPersonArmsSpreadFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
