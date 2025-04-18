import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconInventoryFilledIcon],svg[lsicon-inventory-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.658 2.092a1 1 0 0 1 .684 0l5 1.818a1 1 0 0 1 .658.94V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4.85a1 1 0 0 1 .658-.94zm.342.94L3 4.85V10h2a1 1 0 0 1 1 1v2h3V9a1 1 0 0 1 1-1h3V4.85z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconInventoryFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
