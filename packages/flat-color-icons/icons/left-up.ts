import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsLeftUpIcon],svg[flat-color-icons-left-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3F51B5" d="M7 7h18L7 25z"></svg:path><svg:path fill="#3F51B5" d="m41.02 35.322l-5.656 5.656l-23.12-23.119l5.657-5.656z"></svg:path>`,
})
export class FlatColorIconsLeftUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
