import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsListIcon],svg[flat-color-icons-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2196F3" d="M6 22h4v4H6zm0-8h4v4H6zm0 16h4v4H6zM6 6h4v4H6zm0 32h4v4H6zm8-16h28v4H14zm0-8h28v4H14zm0 16h28v4H14zm0-24h28v4H14zm0 32h28v4H14z"></svg:path>`,
})
export class FlatColorIconsListIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
