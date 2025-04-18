import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riStackedViewIcon],svg[ri-stacked-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm1 11V4h14v9zm-1 4a1 1 0 0 0-1 1v4h2v-3h14v3h2v-4a1 1 0 0 0-1-1z"></svg:path>`,
})
export class RiStackedViewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
