import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAlignRightSolidIcon],svg[streamline-align-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1A.75.75 0 0 1 .75.25h12.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 1m3.25 2.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5zM5.5 7a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7A.75.75 0 0 1 5.5 7m-3 3a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5h-10A.75.75 0 0 1 2.5 10M.75 12.25a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAlignRightSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
