import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsUpLeftIcon],svg[flat-color-icons-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3F51B5" d="m4 19l14 11.7V7.3z"></svg:path><svg:path fill="#3F51B5" d="M42 27v13h-8V27c0-2.2-1.8-4-4-4H13v-8h17c6.6 0 12 5.4 12 12"></svg:path>`,
})
export class FlatColorIconsUpLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
