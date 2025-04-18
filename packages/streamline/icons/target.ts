import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTargetIcon],svg[streamline-target-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.48 7.516a6.5 6.5 0 1 1-6.93-7"></svg:path><svg:path d="M9.79 8.09A3 3 0 1 1 5.9 4.21M7 7l2.5-2.5m2 .5l-2-.5l-.5-2l2-2l.5 2l2 .5z"></svg:path></svg:g>`,
})
export class StreamlineTargetIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
