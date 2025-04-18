import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feInsertLinkIcon],svg[fe-insert-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9H7a3 3 0 0 0 0 6h4v2H7A5 5 0 0 1 7 7h4zm2 6h4a3 3 0 0 0 0-6h-4V7h4a5 5 0 0 1 0 10h-4zm-4-4h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2"></svg:path>`,
})
export class FeInsertLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
