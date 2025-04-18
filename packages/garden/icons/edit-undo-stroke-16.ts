import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenEditUndoStroke16Icon],svg[garden-edit-undo-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M15.5 11.2c0-4.3-3.5-7.8-7.8-7.8c-2.6.1-5.2 1.5-6.7 3.7M.5 3v4c0 .3.2.5.5.5h4"></svg:path>`,
})
export class GardenEditUndoStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
