import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineAlignmentTopRightIcon],svg[icon-park-outline-alignment-top-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" stroke-linejoin="round" rx="3"></svg:rect><svg:path d="M24 12v4m6-4v12m6-12v8"></svg:path></svg:g>`,
})
export class IconParkOutlineAlignmentTopRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
