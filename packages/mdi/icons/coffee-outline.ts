import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCoffeeOutlineIcon],svg[mdi-coffee-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 21v-2h18v2zM20 8V5h-2v3zm0-5a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V3zm-4 2H6v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2z"></svg:path>`,
})
export class MdiCoffeeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
