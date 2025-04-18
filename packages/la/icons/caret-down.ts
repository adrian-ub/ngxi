import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laCaretDownIcon],svg[la-caret-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.594 12l1.687 1.719l10 10l.719.687l.719-.687l10-10L28.406 12zm4.844 2h15.124L16 21.563z"></svg:path>`,
})
export class LaCaretDownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
