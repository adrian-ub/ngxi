import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesNavigationMenuSolidIcon],svg[bubbles-navigation-menu-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M5 10h6a.666.666 0 1 1 0 1.333H5A.667.667 0 1 1 5 10m-.667-2A.667.667 0 0 1 5 7.333h6a.667.667 0 1 1 0 1.334H5A.667.667 0 0 1 4.333 8M11 6H5a.667.667 0 0 1 0-1.333h6A.667.667 0 1 1 11 6"></svg:path>`,
})
export class BubblesNavigationMenuSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
