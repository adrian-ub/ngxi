import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineManSymbolIcon],svg[streamline-man-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.75 13.5a4.25 4.25 0 1 0 0-8.5a4.25 4.25 0 0 0 0 8.5M9 .5h4.5V5M7.75 6.25L13.5.5"></svg:path>`,
})
export class StreamlineManSymbolIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
