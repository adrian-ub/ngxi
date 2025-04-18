import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsGenericSortingDescIcon],svg[flat-color-icons-generic-sorting-desc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2196F3" d="M6 38h4v4H6zm0-8h12v4H6zm0-8h20v4H6zm0-8h28v4H6zm0-8h36v4H6z"></svg:path>`,
})
export class FlatColorIconsGenericSortingDescIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
