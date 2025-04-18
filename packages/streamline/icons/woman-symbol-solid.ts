import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWomanSymbolSolidIcon],svg[streamline-woman-symbol-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 1.5A3.25 3.25 0 1 0 7 8a3.25 3.25 0 0 0 0-6.5m4.75 3.25a4.75 4.75 0 0 1-4 4.691v1.309h.75a.75.75 0 0 1 0 1.5h-.75v1a.75.75 0 0 1-1.5 0v-1H5.5a.75.75 0 0 1 0-1.5h.75V9.441a4.751 4.751 0 1 1 5.5-4.691" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineWomanSymbolSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
