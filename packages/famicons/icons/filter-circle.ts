import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsFilterCircleIcon],svg[famicons-filter-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m32 304h-64a16 16 0 0 1 0-32h64a16 16 0 0 1 0 32m48-64H176a16 16 0 0 1 0-32h160a16 16 0 0 1 0 32m32-64H144a16 16 0 0 1 0-32h224a16 16 0 0 1 0 32"></svg:path>`,
})
export class FamiconsFilterCircleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
