import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLogicOrIcon],svg[tabler-logic-or-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 12h-6M2 9h7m-7 6h7M8 5c10.667 2.1 10.667 12.6 0 14q2.709-7 0-14"></svg:path>`,
})
export class TablerLogicOrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
