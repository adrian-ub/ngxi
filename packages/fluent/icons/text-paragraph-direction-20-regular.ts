import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextParagraphDirection20RegularIcon],svg[fluent-text-paragraph-direction-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 3a4 4 0 1 0 0 8H13v6.5a.5.5 0 0 0 1 0V4h1v13.5a.5.5 0 0 0 1 0V4h.5a.5.5 0 0 0 0-1zM13 4v6h-1.5a3 3 0 0 1 0-6zM3.146 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.793 8L3.146 6.354a.5.5 0 0 1 0-.708m2.708 6a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L4.207 14l1.647-1.646a.5.5 0 0 0 0-.708"></svg:path>`,
})
export class FluentTextParagraphDirection20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
