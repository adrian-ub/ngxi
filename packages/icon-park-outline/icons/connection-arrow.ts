import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineConnectionArrowIcon],svg[icon-park-outline-connection-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40.99 8.027H12.182C9.455 8.027 4 9.55 4 15.967S9.455 24 12.182 24h23.812C38.72 24 44 25.568 44 31.985s-5.279 8.018-8.006 8.018H6.065"></svg:path><svg:path d="m8.046 35.993l-3.979 4.066L8.046 44M38.043 3.954L42.02 8.02l-3.978 3.941"></svg:path></svg:g>`,
})
export class IconParkOutlineConnectionArrowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
