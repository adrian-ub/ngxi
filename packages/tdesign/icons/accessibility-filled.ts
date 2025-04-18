import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignAccessibilityFilledIcon],svg[tdesign-accessibility-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.5A2.25 2.25 0 1 0 12 0a2.25 2.25 0 0 0 0 4.5M21.75 7V5.5H2.25V7l6.5 1.75L9 12L4.75 22.75l1.5.75l5.745-9h.01l5.745 9l1.5-.75L15 12l.25-3.25z"></svg:path>`,
})
export class TdesignAccessibilityFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
