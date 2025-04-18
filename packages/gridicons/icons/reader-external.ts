import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsReaderExternalIcon],svg[gridicons-reader-external-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.376 2.016h6.608v6.608h-1.5V4.577l-5.87 5.87l-.53.53l-1.061-1.06l.53-.53l5.87-5.87h-4.047zM5 5.5h4V4H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-4h-1.5v4a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path>`,
})
export class GridiconsReaderExternalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
