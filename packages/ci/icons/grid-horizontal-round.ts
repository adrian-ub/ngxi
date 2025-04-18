import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciGridHorizontalRoundIcon],svg[ci-grid-horizontal-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 17h-4v-4h4v4Zm-6 0h-4v-4h4v4Zm-6 0H4v-4h4v4Zm12-6h-4V7h4v4Zm-8 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm-4 0H4V7h4v4Z"></svg:path>`,
})
export class CiGridHorizontalRoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
