import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineAlignmentVerticalLeftIcon],svg[icon-park-outline-alignment-vertical-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" stroke-linejoin="round" rx="3"></svg:rect><svg:path d="M12 22v4m6-8v12m6-10v8"></svg:path></svg:g>`,
})
export class IconParkOutlineAlignmentVerticalLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
