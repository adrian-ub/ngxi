import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxlXingIcon],svg[bxl-xing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6a.4.4 0 0 0-.38.62l2 3.38l-3.06 5.4a.45.45 0 0 0 0 .45a.43.43 0 0 0 .38.19h2.87a.89.89 0 0 0 .79-.55s3-5.31 3.11-5.51l-2-3.46A.91.91 0 0 0 7.92 6zm12.16-4a.84.84 0 0 0-.77.55L10 13.93l4.09 7.52a.91.91 0 0 0 .81.55h2.88a.43.43 0 0 0 .38-.18a.45.45 0 0 0 0-.45l-4.07-7.43l6.36-11.31a.45.45 0 0 0 0-.45a.44.44 0 0 0-.38-.18z"></svg:path>`,
})
export class BxlXingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
