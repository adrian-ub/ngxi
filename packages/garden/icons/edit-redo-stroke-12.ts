import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenEditRedoStroke12Icon],svg[garden-edit-redo-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M.5 8.2C.5 5 3.1 2.4 6.3 2.4C9 2.5 9.9 3.8 11 5m-2.5.5H11c.3 0 .5-.2.5-.5V2.5"></svg:path>`,
})
export class GardenEditRedoStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
