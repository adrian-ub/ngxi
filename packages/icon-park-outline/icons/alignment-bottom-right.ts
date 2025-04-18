import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineAlignmentBottomRightIcon],svg[icon-park-outline-alignment-bottom-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" stroke-linejoin="round" rx="3"></svg:rect><svg:path d="M24 32v4m6-12v12m6-8v8"></svg:path></svg:g>`,
})
export class IconParkOutlineAlignmentBottomRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
