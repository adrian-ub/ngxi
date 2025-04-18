import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInformationCircleSolidIcon],svg[streamline-information-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 14A7 7 0 1 0 7 0a7 7 0 0 0 0 14M5.5 9.375a.625.625 0 1 0 0 1.25h3a.625.625 0 1 0 0-1.25h-.875V6.5A.625.625 0 0 0 7 5.875H6a.625.625 0 1 0 0 1.25h.375v2.25zM8 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineInformationCircleSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
