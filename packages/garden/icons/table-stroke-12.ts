import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenTableStroke12Icon],svg[garden-table-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 0a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1zM3 9H1v2h2zm3 0H4v2h2zm5 0H7v2h4zM3 6H1v2h2zm3 0H4v2h2zm5 0H7v2h4zM3 3H1v2h2zm3 0H4v2h2zm5 0H7v2h4zm0-2H1v1h10z"></svg:path>`,
})
export class GardenTableStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
