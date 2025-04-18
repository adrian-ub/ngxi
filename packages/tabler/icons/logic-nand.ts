import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLogicNandIcon],svg[tabler-logic-nand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 12h-3M2 9h3m-3 6h3M7 5c6 0 8 3.5 8 7s-2 7-8 7H5V5zm8 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path>`,
})
export class TablerLogicNandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
