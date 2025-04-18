import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsImageAddIcon],svg[bx-bxs-image-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M9 13l3-4l3 4.5V12h4V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h8v-4H5l3-4l1 2z" fill="currentColor"></svg:path><svg:path d="M19 14h-2v3h-3v2h3v3h2v-3h3v-2h-3z" fill="currentColor"></svg:path>`,
})
export class BxBxsImageAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
