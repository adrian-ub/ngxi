import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laFileImageIcon],svg[la-file-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V9.594l-.281-.313l-6-6L19.406 3zm2 2h10v6h6v16H8zm12 1.438L22.563 9H20zM21.094 14c-.551 0-1 .45-1 1s.449 1 1 1s1-.45 1-1s-.45-1-1-1M14 15.594l-.719.687l-4 4l1.438 1.438L14 18.437l2.281 2.282l.719.687l.719-.687L19 19.437l2.281 2.282l1.438-1.438l-3-3l-.719-.687l-.719.687L17 18.563l-2.281-2.282z"></svg:path>`,
})
export class LaFileImageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
