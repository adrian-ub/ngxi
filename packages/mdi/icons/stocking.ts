import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiStockingIcon],svg[mdi-stocking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2v8c0 .85-.5 1.57-1.26 1.86L9.5 21.77c-1 .47-2.21.04-2.67-.96L6 19c-.5-1-.05-2.2.95-2.66L10 14.91V9a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm-7 2v3h7V4z"></svg:path>`,
})
export class MdiStockingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
