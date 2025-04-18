import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsDownLeftIcon],svg[flat-color-icons-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3F51B5" d="m4 29l14-11.7v23.4z"></svg:path><svg:path fill="#3F51B5" d="M42 21V8h-8v13c0 2.2-1.8 4-4 4H13v8h17c6.6 0 12-5.4 12-12"></svg:path>`,
})
export class FlatColorIconsDownLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
