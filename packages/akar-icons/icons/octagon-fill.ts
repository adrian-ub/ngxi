import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsOctagonFillIcon],svg[akar-icons-octagon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.235 1.317a2 2 0 0 1 1.53 0l6.248 2.588a2 2 0 0 1 1.082 1.082l2.588 6.248a2 2 0 0 1 0 1.53l-2.588 6.248a2 2 0 0 1-1.082 1.082l-6.248 2.588a2 2 0 0 1-1.53 0l-6.248-2.588a2 2 0 0 1-1.082-1.082l-2.588-6.248a2 2 0 0 1 0-1.53l2.588-6.248a2 2 0 0 1 1.082-1.082z"></svg:path>`,
})
export class AkarIconsOctagonFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
