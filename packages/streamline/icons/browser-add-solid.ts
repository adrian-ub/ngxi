import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBrowserAddSolidIcon],svg[streamline-browser-add-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.546 2.815v9.434c0 .113.092.205.205.205h10.498a.204.204 0 0 0 .205-.205V2.815zM1.751.046C.809.046.046.81.046 1.751v10.498c0 .942.763 1.705 1.705 1.705h10.498c.942 0 1.705-.763 1.705-1.705V1.751c0-.942-.763-1.705-1.705-1.705zM3.75 7.75A.75.75 0 0 1 4.5 7h1.75V5.25a.75.75 0 0 1 1.5 0V7H9.5a.75.75 0 0 1 0 1.5H7.75v1.75a.75.75 0 1 1-1.5 0V8.5H4.5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBrowserAddSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
