import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCaretDownIcon],svg[tdesign-caret-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17.914L21.414 8.5H2.586zM7.414 10.5h9.172L12 15.086z"></svg:path>`,
})
export class TdesignCaretDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
