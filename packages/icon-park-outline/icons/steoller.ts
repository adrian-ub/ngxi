import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSteollerIcon],svg[icon-park-outline-steoller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40 24H12l2.5 10H36zm-28 0l-4-9H3.5"></svg:path><svg:circle cx="20" cy="41" r="3"></svg:circle><svg:circle cx="31" cy="41" r="3"></svg:circle><svg:path d="m23 8l5 16h12s3.5-8-2.5-14S25.667 6.667 23 8"></svg:path></svg:g>`,
})
export class IconParkOutlineSteollerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
