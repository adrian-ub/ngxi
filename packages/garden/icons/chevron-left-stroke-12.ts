import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenChevronLeftStroke12Icon],svg[garden-chevron-left-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.354 1.646a.5.5 0 0 1 .057.638l-.057.07L4.707 6l3.647 3.646a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.638.057l-.07-.057l-4-4a.5.5 0 0 1-.057-.638l.057-.07l4-4a.5.5 0 0 1 .708 0"></svg:path>`,
})
export class GardenChevronLeftStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
