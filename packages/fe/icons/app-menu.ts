import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feAppMenuIcon],svg[fe-app-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 16h4v4h-4zm-6 0h4v4h-4zm-6 0h4v4H4zm12-6h4v4h-4zm-6 0h4v4h-4zm-6 0h4v4H4zm12-6h4v4h-4zm-6 0h4v4h-4zM4 4h4v4H4z"></svg:path>`,
})
export class FeAppMenuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
