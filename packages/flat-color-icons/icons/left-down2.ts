import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsLeftDown2Icon],svg[flat-color-icons-left-down2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3F51B5" d="m19 44l11.7-14H7.3z"></svg:path><svg:path fill="#3F51B5" d="M27 6h13v8H27c-2.2 0-4 1.8-4 4v17h-8V18c0-6.6 5.4-12 12-12"></svg:path>`,
})
export class FlatColorIconsLeftDown2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
