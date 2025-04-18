import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignIconFilledIcon],svg[tdesign-icon-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H8v5.15A7.5 7.5 0 1 0 16.85 16H22zm-5.016 12A7.5 7.5 0 0 0 10 7.016V4h10v10z"></svg:path>`,
})
export class TdesignIconFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
