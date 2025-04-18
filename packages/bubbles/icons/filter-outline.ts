import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesFilterOutlineIcon],svg[bubbles-filter-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M.5 4.534h23M2.95 9.786h18.1M8.647 20.291h6.706m-9.954-5.253h13.202"></svg:path>`,
})
export class BubblesFilterOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
