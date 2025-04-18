import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxMedalIcon],svg[bx-medal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c3.859 0 7-3.141 7-7s-3.141-7-7-7s-7 3.141-7 7s3.14 7 7 7m0-12c2.757 0 5 2.243 5 5s-2.243 5-5 5s-5-2.243-5-5s2.243-5 5-5m-1-8H7v5.518a8.96 8.96 0 0 1 4-1.459zm6 0h-4v4.059a8.96 8.96 0 0 1 4 1.459z"></svg:path><svg:path fill="currentColor" d="m10.019 15.811l-.468 2.726L12 17.25l2.449 1.287l-.468-2.726l1.982-1.932l-2.738-.398L12 11l-1.225 2.481l-2.738.398z"></svg:path>`,
})
export class BxMedalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
