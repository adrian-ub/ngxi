import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWebSolidIcon],svg[streamline-web-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.049.276A7.01 7.01 0 0 0 .028 6.375h3.2a15.8 15.8 0 0 1 1.82-6.1ZM3.228 7.625h-3.2a7.01 7.01 0 0 0 5.02 6.1a15.8 15.8 0 0 1-1.82-6.1m3.424 6.367a14.5 14.5 0 0 1-2.17-6.367h5.035a14.5 14.5 0 0 1-2.17 6.367a7 7 0 0 1-.695 0m2.3-.268a7.01 7.01 0 0 0 5.02-6.099h-3.2a15.8 15.8 0 0 1-1.82 6.1Zm1.82-7.349h3.2a7.01 7.01 0 0 0-5.02-6.1a15.8 15.8 0 0 1 1.82 6.1M6.652.008a7 7 0 0 1 .696 0a14.5 14.5 0 0 1 2.169 6.367H4.483c.217-2.277.963-4.46 2.17-6.367Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineWebSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
