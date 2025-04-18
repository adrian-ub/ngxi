import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineUserCircleSingleSolidIcon],svg[streamline-user-circle-single-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 7a6.98 6.98 0 0 1-1.941 4.838A6.98 6.98 0 0 1 7.02 14h-.04a6.98 6.98 0 0 1-5.039-2.162A7 7 0 1 1 14 7m-2.757 3.5A5.49 5.49 0 0 0 7 8.5a5.49 5.49 0 0 0-4.243 2A5.49 5.49 0 0 0 7 12.5a5.49 5.49 0 0 0 4.243-2M7 7.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineUserCircleSingleSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
