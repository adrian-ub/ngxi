import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsDotGridFillIcon],svg[akar-icons-dot-grid-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 2a2 2 0 1 1 0 4a2 2 0 0 1 0-4m8 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4m10 2a2 2 0 1 0-4 0a2 2 0 0 0 4 0M4 10a2 2 0 1 1 0 4a2 2 0 0 1 0-4m10 2a2 2 0 1 0-4 0a2 2 0 0 0 4 0m6-2a2 2 0 1 1 0 4a2 2 0 0 1 0-4M6 20a2 2 0 1 0-4 0a2 2 0 0 0 4 0m6-2a2 2 0 1 1 0 4a2 2 0 0 1 0-4m10 2a2 2 0 1 0-4 0a2 2 0 0 0 4 0" clip-rule="evenodd"></svg:path>`,
})
export class AkarIconsDotGridFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
