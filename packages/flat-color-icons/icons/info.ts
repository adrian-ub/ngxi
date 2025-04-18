import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsInfoIcon],svg[flat-color-icons-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21" fill="#2196F3"></svg:circle><svg:path fill="#fff" d="M22 22h4v11h-4z"></svg:path><svg:circle cx="24" cy="16.5" r="2.5" fill="#fff"></svg:circle>`,
})
export class FlatColorIconsInfoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
