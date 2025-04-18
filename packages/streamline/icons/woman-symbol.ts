import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWomanSymbolIcon],svg[streamline-woman-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 9A4.25 4.25 0 1 0 7 .5A4.25 4.25 0 0 0 7 9m0 0v4.5m-2-2h4"></svg:path>`,
})
export class StreamlineWomanSymbolIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
