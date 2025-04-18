import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignVisualRecognitionFilledIcon],svg[tdesign-visual-recognition-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20h12.876a6.47 6.47 0 0 1-1.376-4a6.47 6.47 0 0 1 1.18-3.735L9 8.585l-5 5V4h16v7.5c.698 0 1.37.11 2 .313z"></svg:path><svg:path fill="currentColor" d="M16 5.25a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5M24 16v-2h-8v2h3v7h2v-7z"></svg:path>`,
})
export class TdesignVisualRecognitionFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
