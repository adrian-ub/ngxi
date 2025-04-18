import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFontFamilyIcon],svg[ri-font-family-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.554 22H3.4L11 3h2l7.6 19h-2.154l-2.4-6H7.954zm3.2-8h6.492L12 5.885z"></svg:path>`,
})
export class RiFontFamilyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
