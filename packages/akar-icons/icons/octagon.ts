import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsOctagonIcon],svg[akar-icons-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M11.235 2.317a2 2 0 0 1 1.53 0l5.54 2.295a2 2 0 0 1 1.083 1.082l2.295 5.54a2 2 0 0 1 0 1.531l-2.295 5.54a2 2 0 0 1-1.082 1.083l-5.54 2.295a2 2 0 0 1-1.531 0l-5.54-2.295a2 2 0 0 1-1.083-1.082l-2.295-5.54a2 2 0 0 1 0-1.531l2.295-5.54a2 2 0 0 1 1.082-1.083z"></svg:path>`,
})
export class AkarIconsOctagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
