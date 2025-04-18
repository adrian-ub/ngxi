import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biToggleOffIcon],svg[bi-toggle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4a4 4 0 0 1 0 8H8a5 5 0 0 0 2-4a5 5 0 0 0-2-4zm-6 8a4 4 0 1 1 0-8a4 4 0 0 1 0 8M0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5"></svg:path>`,
})
export class BiToggleOffIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
