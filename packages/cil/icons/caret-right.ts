import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilCaretRightIcon],svg[cil-caret-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148.092 496h-36.45V16.333h34.547L416 256.286Zm-4.45-439.108v400.15l224.287-200.684Z"></svg:path>`,
})
export class CilCaretRightIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
