import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenChevronDownStroke12Icon],svg[garden-chevron-down-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.646 3.646a.5.5 0 0 1 .638-.057l.07.057L6 7.293l3.646-3.647a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 .057.638l-.057.07l-4 4a.5.5 0 0 1-.638.057l-.07-.057l-4-4a.5.5 0 0 1 0-.708"></svg:path>`,
})
export class GardenChevronDownStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
