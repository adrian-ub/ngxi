import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenEditUndoStroke12Icon],svg[garden-edit-undo-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M11.5 8.2c0-3.2-2.6-5.8-5.8-5.8C3 2.5 2.1 3.8 1 5m2.5.5H1C.7 5.5.5 5.3.5 5V2.5"></svg:path>`,
})
export class GardenEditUndoStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
