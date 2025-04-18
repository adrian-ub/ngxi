import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1EnvelopeWithArrowIcon],svg[noto-v1-envelope-with-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#fcc21b" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M14.85 69.89v51.42h98.3V69.89L64 94.33z"></svg:path><svg:path d="M14.85 48.36v13.68L64 86.47l49.15-24.43V48.36z"></svg:path></svg:g><svg:path fill="#ed6c30" d="M63.85 62.28L40.24 30.06h14.73V0h17.62v30.06h14.88z"></svg:path>`,
})
export class NotoV1EnvelopeWithArrowIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
