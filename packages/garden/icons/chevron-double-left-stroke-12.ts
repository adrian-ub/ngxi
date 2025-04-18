import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenChevronDoubleLeftStroke12Icon],svg[garden-chevron-double-left-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.089 5.716l.057-.07l4-4a.5.5 0 0 1 .765.638l-.057.07L7.207 6l3.647 3.646a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.638.057l-.07-.057l-4-4a.5.5 0 0 1-.057-.638m-5 0l.057-.07l4-4a.5.5 0 0 1 .765.638l-.057.07L2.207 6l3.647 3.646a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.638.057l-.07-.057l-4-4a.5.5 0 0 1-.057-.638"></svg:path>`,
})
export class GardenChevronDoubleLeftStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
