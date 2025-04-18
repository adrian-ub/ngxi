import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPencilLineDuotoneIcon],svg[ph-pencil-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M221.66 90.34L192 120l-56-56l29.66-29.66a8 8 0 0 1 11.31 0L221.66 79a8 8 0 0 1 0 11.34" opacity=".2"></svg:path><svg:path d="m227.32 73.37l-44.69-44.68a16 16 0 0 0-22.63 0L36.69 152A15.86 15.86 0 0 0 32 163.31V208a16 16 0 0 0 16 16h168a8 8 0 0 0 0-16H115.32l112-112a16 16 0 0 0 0-22.63M79.32 188L164 103.31L180.69 120L96 204.69ZM68 176.69L51.31 160L136 75.31L152.69 92Zm-20 2.62L76.69 208H48Zm144-70.62L147.32 64l24-24L216 84.69Z"></svg:path></svg:g>`,
})
export class PhPencilLineDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
