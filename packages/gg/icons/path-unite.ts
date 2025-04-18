import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPathUniteIcon],svg[gg-path-unite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5H5v10h4v4h10V9h-4z"></svg:path>`,
})
export class GgPathUniteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
