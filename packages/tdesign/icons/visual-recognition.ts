import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignVisualRecognitionIcon],svg[tdesign-visual-recognition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v10h-2V4H4v9.586l5-5l4.914 4.914l-1.414 1.414l-3.5-3.5l-5 5V20h13v2H2zm13.547 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0M16 14h8v2h-3v7h-2v-7h-3z"></svg:path>`,
})
export class TdesignVisualRecognitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
