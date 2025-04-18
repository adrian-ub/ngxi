import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPencilStroke12Icon],svg[garden-pencil-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M.5 11.5v-2L9.1.9c.2-.2.5-.2.7 0l1.3 1.3c.2.2.2.5 0 .7l-8.6 8.6zm7-9l2 2"></svg:path>`,
})
export class GardenPencilStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
