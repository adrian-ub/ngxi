import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFormatParagraphRoundedIcon],svg[material-symbols-light-format-paragraph-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.846 19q-.213 0-.356-.144t-.144-.356V13h-.192q-1.671 0-2.836-1.164Q6.154 10.67 6.154 9t1.164-2.835T10.154 5h5.923q.213 0 .356.144t.144.357t-.144.356t-.356.143h-1.5v12.5q0 .213-.144.356t-.357.144t-.356-.144t-.143-.356V6h-2.23v12.5q0 .213-.145.356t-.356.144"></svg:path>`,
})
export class MaterialSymbolsLightFormatParagraphRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
