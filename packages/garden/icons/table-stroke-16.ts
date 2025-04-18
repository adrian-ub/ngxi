import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenTableStroke16Icon],svg[garden-table-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 0a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1zM5 12H1v3h4zm5 0H6v3h4zm5 0h-4v3h4zM5 8H1v3h4zm5 0H6v3h4zm5 0h-4v3h4zM5 4H1v3h4zm5 0H6v3h4zm5 0h-4v3h4zm0-3H1v2h14z"></svg:path>`,
})
export class GardenTableStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
