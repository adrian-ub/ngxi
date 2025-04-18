import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPlayPrintIcon],svg[pepicons-play-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M19.49 10.19a1 1 0 0 1-.054 1.74l-11.97 6.299A1 1 0 0 1 6 17.344V3.777a1 1 0 0 1 1.519-.855l11.97 7.268Z" opacity=".8"></svg:path><svg:path fill-rule="evenodd" d="m4.65 16.844l11.97-6.3L4.65 3.278v13.567Zm12.436-5.414a1 1 0 0 0 .054-1.74L5.169 2.422a1 1 0 0 0-1.519.855v13.567a1 1 0 0 0 1.466.885l11.97-6.3Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPlayPrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
