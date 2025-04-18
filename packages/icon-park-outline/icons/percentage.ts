import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePercentageIcon],svg[icon-park-outline-percentage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="11" cy="11" r="5"></svg:circle><svg:circle cx="37" cy="37" r="5"></svg:circle><svg:path d="M42 6L6 42"></svg:path></svg:g>`,
})
export class IconParkOutlinePercentageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
