import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFuseBladeIcon],svg[mdi-fuse-blade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 21H8l-2-2v-3h4zm8-5h-4v5h2l2-2zM3 3v1a1 1 0 0 0 1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0 1-1V3zm8.83 10V9.73H10l2.61-5.07v3.27h1.75z"></svg:path>`,
})
export class MdiFuseBladeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
