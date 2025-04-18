import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLettersYIcon],svg[tdesign-letters-y-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.713 8.22A1.5 1.5 0 0 0 17 7.337V4h-2v3.175L12 11.3L9 7.175V4H7v3.337c0 .317.1.626.287.883L11 13.325V20h2v-6.675z"></svg:path>`,
})
export class TdesignLettersYIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
