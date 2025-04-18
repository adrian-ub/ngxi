import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiCropIcon],svg[mynaui-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M6.6 3v9.6c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311c.642.327 1.482.327 3.162.327H21"></svg:path><svg:path d="M9.2 6.6h3.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311c.327.642.327 1.482.327 3.162v3.4M6.6 6.6H3M17.4 21v-3.6"></svg:path></svg:g>`,
})
export class MynauiCropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
