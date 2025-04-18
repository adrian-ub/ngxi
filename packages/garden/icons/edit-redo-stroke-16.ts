import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenEditRedoStroke16Icon],svg[garden-edit-redo-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M.5 11.2C.5 7 4 3.5 8.2 3.5c2.7 0 5.2 1.4 6.8 3.6m.5-4.1v4c0 .3-.2.5-.5.5h-4"></svg:path>`,
})
export class GardenEditRedoStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
