import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneLocalCafeIcon],svg[ic-twotone-local-cafe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 15h6c1.1 0 2-.9 2-2V5H6v8c0 1.1.9 2 2 2" opacity=".3"></svg:path><svg:path fill="currentColor" d="M2 19h18v2H2zm2-6c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2H4zm14-8h2v3h-2zM6 5h10v8c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2z"></svg:path>`,
})
export class IcTwotoneLocalCafeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
