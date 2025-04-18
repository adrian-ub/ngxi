import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenLineGraphFill16Icon],svg[garden-line-graph-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1H1c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1m0 13.5V14zm.02-7.65l-2 3c-.23.35-.81.35-1.04 0L9.5 6.13l-3.48 5.22c-.23.35-.81.35-1.04 0L3.5 9.13l-1.48 2.22c-.12.18-.32.27-.52.27c-.12 0-.24-.03-.35-.1a.626.626 0 0 1-.17-.87l2-3c.23-.35.81-.35 1.04 0L5.5 9.87l3.48-5.22c.23-.35.81-.35 1.04 0l2.48 3.72l1.48-2.22c.19-.29.58-.37.87-.17c.28.19.36.58.17.87"></svg:path>`,
})
export class GardenLineGraphFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
