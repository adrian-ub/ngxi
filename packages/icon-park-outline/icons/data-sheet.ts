import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineDataSheetIcon],svg[icon-park-outline-data-sheet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="32" x="4" y="8" rx="2"></svg:rect><svg:path d="M32 25v7m-8-16v16m-8-12v12"></svg:path></svg:g>`,
})
export class IconParkOutlineDataSheetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
