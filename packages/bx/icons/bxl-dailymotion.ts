import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxlDailymotionIcon],svg[bx-bxl-dailymotion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M13.551 11.485a2.327 2.327 0 0 0-2.328 2.332c0 1.314 1.013 2.313 2.441 2.313l-.012.002c1.192 0 2.193-.983 2.193-2.28c.001-1.349-1.001-2.367-2.294-2.367z" fill="currentColor"></svg:path><svg:path d="M3 3v18h18V3H3zm15.52 15.605h-2.682v-1.058c-.825.81-1.667 1.103-2.786 1.103c-1.142 0-2.124-.371-2.947-1.114c-1.086-.956-1.648-2.227-1.648-3.701c0-1.351.524-2.561 1.507-3.506c.878-.859 1.946-1.298 3.139-1.298c1.14 0 2.018.385 2.647 1.192V6.118l2.77-.574v-.002l.002.003h-.002v13.06z" fill="currentColor"></svg:path>`,
})
export class BxBxlDailymotionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
