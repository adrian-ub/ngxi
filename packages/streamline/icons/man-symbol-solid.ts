import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineManSymbolSolidIcon],svg[streamline-man-symbol-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 .75A.75.75 0 0 1 8.75 0h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V2.56L9.026 6.036a5 5 0 1 1-1.06-1.06l3.473-3.475H8.75A.75.75 0 0 1 8 .75m-.594 5.708a3.5 3.5 0 1 0 .135.135a.8.8 0 0 1-.135-.135" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineManSymbolSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
