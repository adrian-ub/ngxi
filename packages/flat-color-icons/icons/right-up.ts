import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsRightUpIcon],svg[flat-color-icons-right-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3F51B5" d="M41 7v18L23 7z"></svg:path><svg:path fill="#3F51B5" d="m12.641 40.983l-5.656-5.656l23.12-23.119l5.655 5.656z"></svg:path>`,
})
export class FlatColorIconsRightUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
