import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTextBlockIcon],svg[ri-text-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2v3h2V4h2v5H3.5v2h5V9H7V4h2v1h2V2zm20 1h-7v2h6v14H4v-5H2v6a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1"></svg:path>`,
})
export class RiTextBlockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
