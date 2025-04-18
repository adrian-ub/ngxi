import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenEditUndoFill12Icon],svg[garden-edit-undo-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M11.5 8.25c0-3.18-2.57-5.75-5.75-5.75C3 2.5 2.05 3.85 1 5"></svg:path><svg:path fill="currentColor" d="M1 6h2.5c.2 0 .38-.12.46-.31s.04-.4-.11-.54l-3-3a.48.48 0 0 0-.54-.11C.12 2.12 0 2.3 0 2.5V5c0 .55.45 1 1 1"></svg:path>`,
})
export class GardenEditUndoFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
