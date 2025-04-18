import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextParagraphDirectionLeft24RegularIcon],svg[fluent-text-paragraph-direction-left-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8.5A5.5 5.5 0 0 1 13.5 3h6.545c.527 0 .955.336.955.75c0 .38-.36.693-.825.743l-.13.007H19.5v16.708c0 .437-.336.792-.75.792s-.75-.355-.75-.792V4.5h-1.5v16.708c0 .437-.336.792-.75.792s-.75-.355-.75-.792V14h-1.5A5.5 5.5 0 0 1 8 8.5m7-4h-1.5a4 4 0 0 0 0 8H15zM5.401 14.858a.668.668 0 0 0 .898-.984L4.585 12L6.3 10.126l.062-.077a.668.668 0 0 0-1.033-.84l-2.146 2.333l-.065.081a.67.67 0 0 0 .065.835l2.146 2.333z"></svg:path>`,
})
export class FluentTextParagraphDirectionLeft24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
