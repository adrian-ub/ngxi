import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTasteIcon],svg[carbon-taste-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4v2h4v8a8 8 0 0 0 16 0V6h4V4zm18 10a6 6 0 0 1-12 0V6h5v8h2V6h5zM11 26h2v2h-2zm-4-2h2v2H7zm8 0h2v2h-2zm4 2h2v2h-2zm4-2h2v2h-2z"></svg:path>`,
})
export class CarbonTasteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
