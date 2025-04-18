import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riToggleFillIcon],svg[ri-toggle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5h8a7 7 0 1 1 0 14H8A7 7 0 1 1 8 5m8 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path>`,
})
export class RiToggleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
