import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconGenieIcon],svg[picon-genie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8c0-4-4-1-3-4.5L2 4C1 8 8 6 8 8M1 4c-3-3 9-3 5 0M4 2C1-1 7-1 4 2"></svg:path>`,
})
export class PiconGenieIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
