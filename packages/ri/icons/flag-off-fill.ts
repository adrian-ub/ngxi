import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFlagOffFillIcon],svg[ri-flag-off-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.586 18l4.607 4.607l1.414-1.415l-19.8-19.799l-1.413 1.415L3 4.414V22h2v-6h7l.724 1.447a1 1 0 0 0 .894.553zM21 6v10.758L7.242 3h5.14a1 1 0 0 1 .895.553L14 5h6a1 1 0 0 1 1 1"></svg:path>`,
})
export class RiFlagOffFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
