import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilArrowsLeftDownIcon],svg[uil-arrows-left-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.71 16.29a1 1 0 0 0-1.42 0L18 18.59V9a3 3 0 0 0-3-3H5.41l2.3-2.29a1 1 0 0 0-1.42-1.42l-4 4a1 1 0 0 0-.21.33a1 1 0 0 0 0 .76a1 1 0 0 0 .21.33l4 4a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L5.41 8H15a1 1 0 0 1 1 1v9.59l-2.29-2.3a1 1 0 0 0-1.42 1.42l4 4a1 1 0 0 0 .33.21a.94.94 0 0 0 .76 0a1 1 0 0 0 .33-.21l4-4a1 1 0 0 0 0-1.42"></svg:path>`,
})
export class UilArrowsLeftDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
