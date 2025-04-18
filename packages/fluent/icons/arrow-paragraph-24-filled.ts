import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowParagraph24FilledIcon],svg[fluent-arrow-paragraph-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2a1 1 0 0 1 1 1v4a3 3 0 0 1-3 3h-4.586l2.293 2.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 1 1 1.414 1.414L14.414 8H19a1 1 0 0 0 1-1V3a1 1 0 0 1 1-1M7.293 11.293a1 1 0 0 0 0 1.414L9.586 15H3a1 1 0 1 0 0 2h6.586l-2.293 2.293a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 .293-.704V16a1 1 0 0 0-.295-.71l-3.998-3.997a1 1 0 0 0-1.414 0"></svg:path>`,
})
export class FluentArrowParagraph24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
