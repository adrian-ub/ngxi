import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciGridHorizontalIcon],svg[ci-grid-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 17h-4v-4h4v4Zm-6 0h-4v-4h4v4Zm-6 0H4v-4h4v4Zm12-6h-4V7h4v4Zm-6 0h-4V7h4v4Zm-6 0H4V7h4v4Z"></svg:path>`,
})
export class CiGridHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
