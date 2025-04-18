import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenHistoryFill12Icon],svg[garden-history-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0a6 6 0 1 1-6 6a.5.5 0 0 1 1 0a5 5 0 1 0 5-5c-1.24 0-2.333.418-3.356 1.436l.71.71A.5.5 0 0 1 3 4H1a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .854-.354l.584.583C3.153.521 4.496 0 6 0m-.5 3a.5.5 0 0 1 .492.41L6 3.5v2.793l1.854 1.853a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.638.057l-.07-.057l-2-2a.5.5 0 0 1-.14-.275L5 6.5v-3a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class GardenHistoryFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
