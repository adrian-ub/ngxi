import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciDragHorizontalIcon],svg[ci-drag-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-6 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-6 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2m12-6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-6 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2M6 8a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class CiDragHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
