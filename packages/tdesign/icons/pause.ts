import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPauseIcon],svg[tdesign-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17V7H8v10zm5 0V7h-3v10z"></svg:path>`,
})
export class TdesignPauseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
