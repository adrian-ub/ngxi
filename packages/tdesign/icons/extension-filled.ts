import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignExtensionFilledIcon],svg[tdesign-extension-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 1a3 3 0 0 0-3 3H2v6a3 3 0 1 1 0 6v6h6a3 3 0 1 1 6 0h6v-6a3 3 0 1 0 0-6V4h-6a3 3 0 0 0-3-3"></svg:path>`,
})
export class TdesignExtensionFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
