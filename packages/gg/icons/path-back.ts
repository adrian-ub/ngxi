import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPathBackIcon],svg[gg-path-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 14H4V4h10v5h5v10H9zM6 6h6v6H6z" clip-rule="evenodd"></svg:path>`,
})
export class GgPathBackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
