import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWheelchair1Icon],svg[streamline-wheelchair-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 4.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 0v4h3a1 1 0 0 1 1 1v4m-6.5-7a3.5 3.5 0 1 0 3.22 4.88"></svg:path>`,
})
export class StreamlineWheelchair1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
