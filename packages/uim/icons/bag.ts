import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimBagIcon],svg[uim-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6H5a3 3 0 0 0-3 3v2.72L8.837 14h6.326L22 11.72V9a3 3 0 0 0-3-3" opacity=".5"></svg:path><svg:path fill="currentColor" d="M10 6V5h4v1h2V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v1zm-1.163 8L2 11.72V18a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3v-6.28L15.163 14z"></svg:path>`,
})
export class UimBagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
