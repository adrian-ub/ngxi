import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCaretRight16RegularIcon],svg[fluent-caret-right-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.571 11.84C6.908 12.298 6 11.827 6 11.024V4.975c0-.803.908-1.274 1.571-.816l3.784 2.617a1.486 1.486 0 0 1 0 2.447zM7 11.024l3.784-2.617a.495.495 0 0 0 0-.815L7 4.975z"></svg:path>`,
})
export class FluentCaretRight16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
