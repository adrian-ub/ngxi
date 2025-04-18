import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWindFlow2Icon],svg[streamline-wind-flow-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 3.5a10.3 10.3 0 0 1 4-1c2 0 3 1.5 5 1.5a10.3 10.3 0 0 0 4-1l-2-1M.5 7.5a10.3 10.3 0 0 1 4-1c2 0 3 1.5 5 1.5a10.3 10.3 0 0 0 4-1l-2-1m-11 5.5a10.3 10.3 0 0 1 4-1c2 0 3 1.5 5 1.5a10.3 10.3 0 0 0 4-1l-2-1"></svg:path>`,
})
export class StreamlineWindFlow2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
