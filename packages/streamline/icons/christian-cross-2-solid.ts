import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineChristianCross2SolidIcon],svg[streamline-christian-cross-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1.124a1 1 0 1 0-2 0V3.74H3.384a1 1 0 1 0 0 2H6v7.188a1 1 0 1 0 2 0V5.74h2.616a1 1 0 1 0 0-2H8z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineChristianCross2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
