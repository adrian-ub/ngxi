import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasRedoIcon],svg[pajamas-redo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.095.28A8 8 0 0 0 1.5 3.335V1.75a.75.75 0 0 0-1.5 0V6h4.25a.75.75 0 1 0 0-1.5H2.523a6.5 6.5 0 1 1-.526 5.994a.75.75 0 0 0-1.385.575A8 8 0 1 0 10.095.279Z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasRedoIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
