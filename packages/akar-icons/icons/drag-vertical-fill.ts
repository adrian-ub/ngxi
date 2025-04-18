import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsDragVerticalFillIcon],svg[akar-icons-drag-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 2a2 2 0 1 1 0 4a2 2 0 0 1 0-4m0 8a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-8 8a2 2 0 1 1 0 4a2 2 0 0 1 0-4m8 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4M8 2a2 2 0 1 1 0 4a2 2 0 0 1 0-4m0 8a2 2 0 1 1 0 4a2 2 0 0 1 0-4" clip-rule="evenodd"></svg:path>`,
})
export class AkarIconsDragVerticalFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
