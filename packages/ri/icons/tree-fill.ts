import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTreeFillIcon],svg[ri-tree-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 7q0 .393-.05.774A6 6 0 0 1 13 18.658V22h-2v-3.6a5.5 5.5 0 0 1-6.517-8.657A8 8 0 0 0 6.286 12.6l1.428-1.4A6 6 0 0 1 6 7a6 6 0 1 1 12 0"></svg:path>`,
})
export class RiTreeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
