import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsReaderShareIcon],svg[gridicons-reader-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:clippath id="gridiconsReaderShare0"><svg:path d="M0 0h20v20H0z"></svg:path></svg:clippath><svg:g clip-path="url(#gridiconsReaderShare0)"><svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M11.867 6.8V3l6.8 6.65l-6.8 6.65v-3.8s-10.2-.884-10.2 4.5c0-10.77 10.2-10.2 10.2-10.2z"></svg:path></svg:g>`,
})
export class GridiconsReaderShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
