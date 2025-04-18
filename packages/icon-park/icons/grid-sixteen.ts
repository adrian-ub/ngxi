import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkGridSixteenIcon],svg[icon-park-grid-sixteen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:rect width="40" height="40" x="4" y="4" stroke-linejoin="round" rx="2"></svg:rect><svg:path d="M14 4V44"></svg:path><svg:path d="M24 4V44"></svg:path><svg:path d="M34 4V44"></svg:path><svg:path stroke-linejoin="round" d="M4 14H44"></svg:path><svg:path stroke-linejoin="round" d="M4 34H44"></svg:path><svg:path stroke-linejoin="round" d="M4 24H44"></svg:path></svg:g>`,
})
export class IconParkGridSixteenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
