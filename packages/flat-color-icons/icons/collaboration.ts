import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsCollaborationIcon],svg[flat-color-icons-collaboration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1565C0" d="M25 22h13l6 6V11c0-2.2-1.8-4-4-4H25c-2.2 0-4 1.8-4 4v7c0 2.2 1.8 4 4 4"></svg:path><svg:path fill="#2196F3" d="M23 19H10l-6 6V8c0-2.2 1.8-4 4-4h15c2.2 0 4 1.8 4 4v7c0 2.2-1.8 4-4 4"></svg:path><svg:g fill="#FFA726"><svg:circle cx="12" cy="31" r="5"></svg:circle><svg:circle cx="36" cy="31" r="5"></svg:circle></svg:g><svg:path fill="#607D8B" d="M20 42s-2.2-4-8-4s-8 4-8 4v2h16zm24 0s-2.2-4-8-4s-8 4-8 4v2h16z"></svg:path>`,
})
export class FlatColorIconsCollaborationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
