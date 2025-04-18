import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineExcludeSelectionIcon],svg[icon-park-outline-exclude-selection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="27" height="27" x="16" y="16" rx="2"></svg:rect><svg:rect width="27" height="27" x="5" y="5" rx="2"></svg:rect><svg:path d="m25 32l-9 9m25-25l-9 9m-16-2l-9 9M32 7l-9 9m20 8L24 43m0-38L5 24m38 10l-9 9M14 5l-9 9"></svg:path></svg:g>`,
})
export class IconParkOutlineExcludeSelectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
