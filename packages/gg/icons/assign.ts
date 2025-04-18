import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggAssignIcon],svg[gg-assign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6h4V4H4v6h2zm4 12H6v-4H4v6h6zm4-12h4v4h2V4h-6zm0 12h4v-4h2v6h-6zm-2-9.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7"></svg:path>`,
})
export class GgAssignIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
