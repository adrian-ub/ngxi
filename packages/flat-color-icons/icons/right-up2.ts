import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsRightUp2Icon],svg[flat-color-icons-right-up2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3F51B5" d="M29 4L17.3 18h23.4z"></svg:path><svg:path fill="#3F51B5" d="M21 42H8v-8h13c2.2 0 4-1.8 4-4V13h8v17c0 6.6-5.4 12-12 12"></svg:path>`,
})
export class FlatColorIconsRightUp2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
