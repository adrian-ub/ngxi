import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneCircleDoubleRightIcon],svg[icon-park-twotone-circle-double-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTCircleDoubleRight0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></svg:path><svg:path stroke-linecap="round" d="m17 31l7-7l-7-7m9 14l7-7l-7-7"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTCircleDoubleRight0)"></svg:path>`,
})
export class IconParkTwotoneCircleDoubleRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
