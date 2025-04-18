import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riWubiInputIcon],svg[ri-wubi-input-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21v-2h3.662l1.234-7H5v-2h3.249l.881-5H4V3h16v2h-8.839l-.882 5H18v9h3v2zm13-9H9.927l-1.235 7H16z"></svg:path>`,
})
export class RiWubiInputIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
