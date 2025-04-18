import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineJumpObjectSolidIcon],svg[streamline-jump-object-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 1A.75.75 0 0 1 .75.25h12.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 1m3.5 4A1.5 1.5 0 0 1 5 3.5h4A1.5 1.5 0 0 1 10.5 5v4A1.5 1.5 0 0 1 9 10.5H5A1.5 1.5 0 0 1 3.5 9zM.75 12.25a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineJumpObjectSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
