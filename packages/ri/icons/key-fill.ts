import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riKeyFillIcon],svg[ri-key-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 14h-4.341a6 6 0 1 1 0-4H23v4h-2v4h-4zM7 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiKeyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
