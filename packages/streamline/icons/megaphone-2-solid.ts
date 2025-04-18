import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMegaphone2SolidIcon],svg[streamline-megaphone-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.25 3.5L11.956.795A1.5 1.5 0 0 1 14 2.193v8.226a1.5 1.5 0 0 1-1.974 1.423L5.25 9.5zM3 3.5h1v7a1 1 0 0 0 1 1h.5a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3V9.33A3.001 3.001 0 0 1 3 3.5" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineMegaphone2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
