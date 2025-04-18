import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenShapesFill16Icon],svg[garden-shapes-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 9a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1zm6.25-.5a3.75 3.75 0 1 1 0 7.5a3.75 3.75 0 0 1 0-7.5M8.857.486l3 5A1 1 0 0 1 11 7H5a1 1 0 0 1-.857-1.514l3-5a1 1 0 0 1 1.714 0"></svg:path>`,
})
export class GardenShapesFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
