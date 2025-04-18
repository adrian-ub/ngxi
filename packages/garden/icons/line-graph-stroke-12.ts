import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenLineGraphStroke12Icon],svg[garden-line-graph-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="11" height="9" x=".5" y="1.5" rx=".5" ry=".5"></svg:rect><svg:path stroke-linejoin="round" d="M.5 9.3L2.7 6l1.47 2.2L7.1 3.8l2.2 3.3l2.2-3.3"></svg:path></svg:g>`,
})
export class GardenLineGraphStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
