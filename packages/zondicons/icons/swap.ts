import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsSwapIcon],svg[zondicons-swap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6a4 4 0 1 1 8 0v8h3l-4 4l-4-4h3V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8a4 4 0 1 1-8 0V6H0l4-4l4 4H5v8a2 2 0 0 0 2 2a2 2 0 0 0 2-2z"></svg:path>`,
})
export class ZondiconsSwapIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
