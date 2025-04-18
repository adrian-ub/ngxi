import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelBubbleIcon],svg[raphael-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5.333c-7.732 0-14 4.7-14 10.5c0 1.982.74 3.833 2.016 5.414L2 25.667l5.613-1.44c2.34 1.316 5.237 2.106 8.387 2.106c7.732 0 14-4.7 14-10.5s-6.268-10.5-14-10.5"></svg:path>`,
})
export class RaphaelBubbleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
