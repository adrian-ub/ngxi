import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineAlignmentLeftTopIcon],svg[icon-park-outline-alignment-left-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" stroke-linejoin="round" rx="3"></svg:rect><svg:path d="M12 24h4m-4-6h12m-12-6h8"></svg:path></svg:g>`,
})
export class IconParkOutlineAlignmentLeftTopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
