import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAlignCenterSolidIcon],svg[streamline-align-center-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1A.75.75 0 0 1 .75.25h12.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 1m1.25 3A.75.75 0 0 1 2 3.25h10a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 4M3.5 6.25a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5zM1.25 10A.75.75 0 0 1 2 9.25h10a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m-.5 2.25a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAlignCenterSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
