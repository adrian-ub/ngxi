import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxPlusIcon],svg[bx-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></svg:path>`,
})
export class BxPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
