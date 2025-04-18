import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLinkOneIcon],svg[mynaui-link-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10.936 8.324l4.38-4.385c1.276-1.276 3.372-1.248 4.683.063c1.31 1.312 1.338 3.41.062 4.686l-3.803 3.807m-8.516-.99L3.94 15.312c-1.277 1.276-1.25 3.374.06 4.686s3.407 1.34 4.683.063l4.38-4.385m-2.065-2.666c-1.311-1.311-1.34-3.41-.063-4.686m2.128 2.603c1.312 1.311 1.34 3.41.063 4.686"></svg:path>`,
})
export class MynauiLinkOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
