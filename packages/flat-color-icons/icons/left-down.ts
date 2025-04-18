import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsLeftDownIcon],svg[flat-color-icons-left-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3F51B5" d="M7 41V23l18 18z"></svg:path><svg:path fill="#3F51B5" d="m35.355 6.946l5.656 5.656l-23.119 23.12l-5.656-5.657z"></svg:path>`,
})
export class FlatColorIconsLeftDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
