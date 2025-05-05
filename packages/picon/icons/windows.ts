import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconWindowsIcon],svg[picon-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3V1l4-1v3M4 4v2l4 1V4M1 4v1l2 1V4M1 3V2l2-1v2"></svg:path>`,
})
export class PiconWindowsIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
