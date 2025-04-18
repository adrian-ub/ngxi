import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciListOlIcon],svg[ci-list-ol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.983 19H4v-1h1.989v-.5h-.994v-1h.995V16H4v-1h2.983v4ZM21 18H9.069v-2H21v2ZM6.983 14H4v-.9L5.79 11H4v-1h2.983v.9L5.193 13h1.79v1ZM21 13H9.069v-2H21v2ZM6.486 9h-.995V6H4.5V5h1.986v4ZM21 8H9.069V6H21v2Z"></svg:path>`,
})
export class CiListOlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
