import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsBadgeIcon],svg[zondicons-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 12a6 6 0 1 1 0-12a6 6 0 0 1 0 12m0-3a3 3 0 1 0 0-6a3 3 0 0 0 0 6m4 2.75V20l-4-4l-4 4v-8.25a6.97 6.97 0 0 0 8 0"></svg:path>`,
})
export class ZondiconsBadgeIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
