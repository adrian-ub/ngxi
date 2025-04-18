import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconSymbolConstantIcon],svg[codicon-symbol-constant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M4 6h8v1H4zm8 3H4v1h8z"></svg:path><svg:path d="m1 4l1-1h12l1 1v8l-1 1H2l-1-1zm1 0v8h12V4z"></svg:path></svg:g>`,
})
export class CodiconSymbolConstantIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
