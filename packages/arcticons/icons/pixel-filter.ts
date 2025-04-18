import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPixelFilterIcon],svg[arcticons-pixel-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4M5.5 24h37M24 5.5v37m0-27.75h18.5M33.25 5.5v37m4.625-37v37M28.625 24v18.5m-9.25-9.25v9.25m-9.25-9.25v9.25m4.625 0V24M5.5 33.25h37m-9.25 2.313h9.25m-9.25 4.625h8.875M24 28.625h18.5m-9.25-9.25h9.25m-9.25-9.25h9.25M6.005 37.8h37m-2.817-4.55v8.874m-4.625-8.874v9.25"></svg:path>`,
})
export class ArcticonsPixelFilterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
