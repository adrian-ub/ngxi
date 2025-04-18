import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsLeftUp2Icon],svg[flat-color-icons-left-up2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3F51B5" d="m19 4l11.7 14H7.3z"></svg:path><svg:path fill="#3F51B5" d="M27 42h13v-8H27c-2.2 0-4-1.8-4-4V13h-8v17c0 6.6 5.4 12 12 12"></svg:path>`,
})
export class FlatColorIconsLeftUp2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
