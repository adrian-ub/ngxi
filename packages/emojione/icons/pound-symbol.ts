import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojionePoundSymbolIcon],svg[emojione-pound-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#4fd1d9"></svg:circle><svg:path fill="#fff" d="m49.4 28l1.6-6h-6.1l1.6-6h-6.1l-1.6 6h-8.1l1.6-6h-6.1l-1.6 6h-6.1l-1.6 6H23l-2.2 8h-6.1L13 42h6.1l-1.6 6h6.1l1.6-6h8.1l-1.6 6h6.1l1.6-6h6.1l1.6-6H41l2.2-8zM35 36h-8.1l2.2-8h8.1z"></svg:path>`,
})
export class EmojionePoundSymbolIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
