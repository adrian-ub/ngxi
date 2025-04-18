import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsCaptionIcon],svg[gridicons-caption-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 15l2-2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h13l-2 2H4v12h16zm2.44-8.56l-.88-.88a1.5 1.5 0 0 0-2.12 0L12 13v2H6v2h9v-1l7.44-7.44a1.5 1.5 0 0 0 0-2.12"></svg:path>`,
})
export class GridiconsCaptionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
