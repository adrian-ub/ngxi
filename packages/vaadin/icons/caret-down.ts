import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinCaretDownIcon],svg[vaadin-caret-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h10l-5 7z"></svg:path>`,
})
export class VaadinCaretDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
