import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laCreativeCommonsByIcon],svg[la-creative-commons-by-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.855 3 3 8.855 3 16s5.855 13 13 13s13-5.855 13-13S23.145 3 16 3m0 2c6.055 0 11 4.945 11 11s-4.945 11-11 11S5 22.055 5 16S9.945 5 16 5m0 3c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0 5c-1.7 0-3 1.3-3 3v3l1 1v4h4v-4l1-1v-3c0-1.7-1.3-3-3-3"></svg:path>`,
})
export class LaCreativeCommonsByIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
