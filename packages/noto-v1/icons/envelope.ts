import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1EnvelopeIcon],svg[noto-v1-envelope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#fcc21b" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M20.97 50.92v45.02h86.06V50.92L64 72.31z"></svg:path><svg:path d="M20.97 32.06v11.98L64 65.43l43.03-21.39V32.06z"></svg:path></svg:g>`,
})
export class NotoV1EnvelopeIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
