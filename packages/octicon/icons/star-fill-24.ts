import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconStarFill24Icon],svg[octicon-star-fill-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.672.668l3.059 6.197l6.838.993a.75.75 0 0 1 .416 1.28l-4.948 4.823l1.168 6.812a.75.75 0 0 1-1.088.79L12 18.347l-6.116 3.216a.75.75 0 0 1-1.088-.791l1.168-6.811l-4.948-4.823a.749.749 0 0 1 .416-1.279l6.838-.994L11.327.668a.75.75 0 0 1 1.345 0"></svg:path>`,
})
export class OcticonStarFill24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
