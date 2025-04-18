import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNavigationVariantOutlineIcon],svg[mdi-navigation-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.27 6.73l-4.24 10.13l-1.32-3.42l-.32-.83l-.82-.32l-3.43-1.33zM21 3L3 10.53v.97l6.84 2.66L12.5 21h.96z"></svg:path>`,
})
export class MdiNavigationVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
