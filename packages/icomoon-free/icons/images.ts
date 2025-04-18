import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeImagesIcon],svg[icomoon-free-images-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-1V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v12c0 .55.45 1 1 1h1v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1M2 3v10h-.998L1 12.998V1.002L1.002 1h13.996l.002.002V2H3c-.55 0-1 .45-1 1m15 11.998l-.002.002H3.002L3 14.998V3.002L3.002 3h13.996l.002.002z"></svg:path><svg:path fill="currentColor" d="M15 5.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 15 5.5m1 8.5H4v-2l3.5-6l4 5h1L16 8z"></svg:path>`,
})
export class IcomoonFreeImagesIcon {
  readonly viewBox = input("0 0 18 16")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
