import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesCheckOutlineIcon],svg[bubbles-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M23.25.749L8.158 22.308a2.2 2.2 0 0 1-3.569.059L.75 17.249"></svg:path>`,
})
export class BubblesCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
