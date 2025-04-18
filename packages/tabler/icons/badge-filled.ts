import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBadgeFilledIcon],svg[tabler-badge-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.486 3.143L12 5.833l-4.486-2.69A1 1 0 0 0 6 4v13a1 1 0 0 0 .486.857l5 3a1 1 0 0 0 1.028 0l5-3A1 1 0 0 0 18 17V4a1 1 0 0 0-1.514-.857"></svg:path>`,
})
export class TablerBadgeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
