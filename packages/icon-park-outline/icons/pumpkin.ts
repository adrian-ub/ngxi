import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePumpkinIcon],svg[icon-park-outline-pumpkin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:rect width="40" height="26" x="4" y="14" rx="13"></svg:rect><svg:ellipse cx="24" cy="27" rx="8" ry="13"></svg:ellipse><svg:path stroke-linecap="round" stroke-linejoin="round" d="M30 6h-3a3 3 0 0 0-3 3v5"></svg:path></svg:g>`,
})
export class IconParkOutlinePumpkinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
