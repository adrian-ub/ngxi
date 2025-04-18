import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenEraserStroke12Icon],svg[garden-eraser-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="m.9 8.4l2.8 2.8c.2.2.5.2.7 0l6.8-6.8c.2-.2.2-.5 0-.7L8.4.9c-.2-.2-.5-.2-.7 0L.9 7.6c-.2.2-.2.6 0 .8zm3.6-3.9l3 3m-1 4h5"></svg:path>`,
})
export class GardenEraserStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
