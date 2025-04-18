import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[topcoatDownloadIcon],svg[topcoat-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40.5 38.5v-1c0-1.48-.43-2-2-2h-34c-1.48 0-2 .49-2 2v1c0 1.55.52 2 2 2h34c1.51 0 2-.48 2-2m-15-36h-8c-2.5 0-3 .47-3 3v11h-10l17 17l17-17h-10v-11c0-2.53-.529-3-3-3"></svg:path>`,
})
export class TopcoatDownloadIcon {
  readonly viewBox = input("0 0 42 42")
  readonly width = input("1em")
  readonly height = input("1em")
}
