import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPencilSimpleLineDuotoneIcon],svg[ph-pencil-simple-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M221.66 90.34L192 120l-56-56l29.66-29.66a8 8 0 0 1 11.31 0L221.66 79a8 8 0 0 1 0 11.34" opacity=".2"></svg:path><svg:path d="m227.32 73.37l-44.69-44.68a16 16 0 0 0-22.63 0L36.69 152A15.86 15.86 0 0 0 32 163.31V208a16 16 0 0 0 16 16h168a8 8 0 0 0 0-16H115.32l112-112a16 16 0 0 0 0-22.63M48 163.31l88-88L180.69 120l-88 88H48Zm144-54.62L147.32 64l24-24L216 84.69Z"></svg:path></svg:g>`,
})
export class PhPencilSimpleLineDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
