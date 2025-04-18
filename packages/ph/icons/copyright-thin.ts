import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCopyrightThinIcon],svg[ph-copyright-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m35.2-65.59a44 44 0 1 1 0-52.82a4 4 0 0 1-6.4 4.81a36 36 0 1 0 0 43.2a4 4 0 0 1 6.4 4.81"></svg:path>`,
})
export class PhCopyrightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
