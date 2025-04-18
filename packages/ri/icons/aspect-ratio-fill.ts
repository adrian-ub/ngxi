import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riAspectRatioFillIcon],svg[ri-aspect-ratio-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-3 9h-2v3h-3v2h5zm-7-5H6v5h2V9h3z"></svg:path>`,
})
export class RiAspectRatioFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
