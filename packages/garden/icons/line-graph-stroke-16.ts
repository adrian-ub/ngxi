import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenLineGraphStroke16Icon],svg[garden-line-graph-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="15" height="13" x=".5" y="1.5" rx=".5" ry=".5"></svg:rect><svg:path stroke-linejoin="round" d="m.5 12.5l3-4.5l2 3l4-6l3 4.5l3-4.5"></svg:path></svg:g>`,
})
export class GardenLineGraphStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
