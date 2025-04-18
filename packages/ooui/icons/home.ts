import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiHomeIcon],svg[ooui-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 1L0 10h3v9h4v-4.6c0-1.47 1.31-2.66 3-2.66s3 1.19 3 2.66V19h4v-9h3z"></svg:path>`,
})
export class OouiHomeIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
