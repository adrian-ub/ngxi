import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiTypeItalicSolidIcon],svg[mynaui-type-italic-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.483 2.25H9a.75.75 0 0 0 0 1.5h4.54l-4.126 16.5H5a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5h-4.04l4.126-16.5H19a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class MynauiTypeItalicSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
