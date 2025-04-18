import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciDragVerticalIcon],svg[ci-drag-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 18a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-6 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0m6-6a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-6 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0m6-6a1 1 0 1 0 2 0a1 1 0 0 0-2 0M8 6a1 1 0 1 0 2 0a1 1 0 0 0-2 0"></svg:path>`,
})
export class CiDragVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
