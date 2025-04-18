import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTifIcon],svg[carbon-tif-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 11V9h-8v14h2v-6h5v-2h-5v-4zm-18 0h3v10h-3v2h8v-2h-3V11h3V9h-8zM2 11h3v12h2V11h3V9H2z"></svg:path>`,
})
export class CarbonTifIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
