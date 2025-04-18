import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonGifIcon],svg[carbon-gif-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12v8a3 3 0 0 0 3 3h5v-8H6v2h2v4H5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h5V9H5a3 3 0 0 0-3 3m28-1V9h-8v14h2v-6h5v-2h-5v-4zM12 9v2h3v10h-3v2h8v-2h-3V11h3V9z"></svg:path>`,
})
export class CarbonGifIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
