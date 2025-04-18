import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciPlusIcon],svg[ci-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 13v6h-2v-6H5v-2h6V5h2v6h6v2h-6Z"></svg:path>`,
})
export class CiPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
