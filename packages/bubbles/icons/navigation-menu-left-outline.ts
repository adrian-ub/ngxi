import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesNavigationMenuLeftOutlineIcon],svg[bubbles-navigation-menu-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M2.25 18.003h19.5m-19.5-6h14.5m-14.5-6h19.5"></svg:path>`,
})
export class BubblesNavigationMenuLeftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
