import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1CrossMarkIcon],svg[noto-v1-cross-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ed6c30" d="m79.64 64l29.9-29.9c1.38-1.38 1.38-3.64 0-5.03L98.93 18.46a3.573 3.573 0 0 0-5.03 0L64 48.36l-29.9-29.9a3.573 3.573 0 0 0-5.03 0l-10.6 10.61a3.555 3.555 0 0 0 0 5.03L48.36 64l-29.9 29.9c-1.38 1.38-1.38 3.64 0 5.03l10.61 10.61a3.573 3.573 0 0 0 5.03 0L64 79.63l29.9 29.91a3.573 3.573 0 0 0 5.03 0l10.61-10.61c1.38-1.39 1.38-3.65 0-5.03z"></svg:path>`,
})
export class NotoV1CrossMarkIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
