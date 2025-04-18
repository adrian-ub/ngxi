import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineListTwoIcon],svg[icon-park-outline-list-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M9 42a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm0-28a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm0 14a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"></svg:path><svg:path stroke-linecap="round" d="M21 24h22M21 38h22M21 10h22"></svg:path></svg:g>`,
})
export class IconParkOutlineListTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
