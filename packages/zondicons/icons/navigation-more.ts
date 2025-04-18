import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsNavigationMoreIcon],svg[zondicons-navigation-more-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 12a2 2 0 1 1 0-4a2 2 0 0 1 0 4m6 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4m6 0a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class ZondiconsNavigationMoreIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
