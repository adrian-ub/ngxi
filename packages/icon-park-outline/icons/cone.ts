import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineConeIcon],svg[icon-park-outline-cone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:ellipse cx="24" cy="39" stroke-linejoin="round" rx="18" ry="6"></svg:ellipse><svg:path stroke-linecap="round" d="M6 39h36"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 39L24 4l18 35"></svg:path></svg:g>`,
})
export class IconParkOutlineConeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
