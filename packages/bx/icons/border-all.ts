import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBorderAllIcon],svg[bx-border-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 21h12V3H3v18zm10-4v2h-6v-6h6zM15 5h4v6h-6V5zM5 7V5h6v6H5zm0 12v-6h6v6z"></svg:path>`,
})
export class BxBorderAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
