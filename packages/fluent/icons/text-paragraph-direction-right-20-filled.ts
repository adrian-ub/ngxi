import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextParagraphDirectionRight20FilledIcon],svg[fluent-text-paragraph-direction-right-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 3a4 4 0 1 0 0 8H13v6.5a.5.5 0 0 0 1 0V4h1v13.5a.5.5 0 0 0 1 0V4h.5a.5.5 0 0 0 0-1zM3.854 7.646a.5.5 0 1 0-.708.708L4.793 10l-1.647 1.646a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708z"></svg:path>`,
})
export class FluentTextParagraphDirectionRight20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
