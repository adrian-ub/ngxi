import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsRightDownIcon],svg[flat-color-icons-right-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3F51B5" d="M41 41H23l18-18z"></svg:path><svg:path fill="#3F51B5" d="m6.983 12.607l5.656-5.656l23.119 23.12l-5.656 5.655z"></svg:path>`,
})
export class FlatColorIconsRightDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
