import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[topcoatSaveIcon],svg[topcoat-save-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.531 1.5H17.5c-2.53 0-3 .566-3 3.016V15.5H5l16.531 16.969L38 15.5H27.5v-11c0-2.453-.453-3-2.969-3M11 36.5l-2.63-6H3l3.94 9.62c.35 1.05 1.091 1.38 3.123 1.38H33c1.969 0 2.38-.3 2.729-1.35l3.94-9.621h-5.13L32 36.5z"></svg:path>`,
})
export class TopcoatSaveIcon {
  readonly viewBox = input("0 0 42 42")
  readonly width = input("1em")
  readonly height = input("1em")
}
