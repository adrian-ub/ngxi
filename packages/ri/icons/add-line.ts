import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riAddLineIcon],svg[ri-add-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></svg:path>`,
})
export class RiAddLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
