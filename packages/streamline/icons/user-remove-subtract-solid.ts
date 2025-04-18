import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineUserRemoveSubtractSolidIcon],svg[streamline-user-remove-subtract-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 3a3 3 0 1 1-6 0a3 3 0 0 1 6 0m5.25 7a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1 0-1.5zM5 7a5 5 0 0 0-5 5a.5.5 0 0 0 .5.5h6.78a2 2 0 0 1 .97-3.75h.55A4.99 4.99 0 0 0 5 7" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineUserRemoveSubtractSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
