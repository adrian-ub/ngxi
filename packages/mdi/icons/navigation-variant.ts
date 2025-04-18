import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNavigationVariantIcon],svg[mdi-navigation-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3L3 10.53v.97l6.84 2.66L12.5 21h.96z"></svg:path>`,
})
export class MdiNavigationVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
