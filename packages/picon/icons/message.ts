import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconMessageIcon],svg[picon-message-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6H0V1h8v7"></svg:path>`,
})
export class PiconMessageIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
