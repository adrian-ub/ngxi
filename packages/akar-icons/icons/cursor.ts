import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsCursorIcon],svg[akar-icons-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="m3 3l7 19l2.051-6.154a6 6 0 0 1 3.795-3.795L22 10z"></svg:path>`,
})
export class AkarIconsCursorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
