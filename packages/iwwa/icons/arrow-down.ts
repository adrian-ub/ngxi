import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iwwaArrowDownIcon],svg[iwwa-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.659 11.833h30.682L20 32.167z"></svg:path>`,
})
export class IwwaArrowDownIcon {
  readonly viewBox = input("0 0 40 40")
  readonly width = input("1em")
  readonly height = input("1em")
}
