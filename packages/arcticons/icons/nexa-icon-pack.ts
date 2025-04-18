import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNexaIconPackIcon],svg[arcticons-nexa-icon-pack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.25 23A8.75 8.75 0 1 1 23 14.25V19c0 2.216-1.784 4-4 4zM25 14.25A8.75 8.75 0 1 1 33.75 23H29c-2.216 0-4-1.784-4-4zM33.75 25A8.75 8.75 0 1 1 25 33.75V29c0-2.216 1.784-4 4-4zM23 33.75A8.75 8.75 0 1 1 14.25 25H19c2.216 0 4 1.784 4 4z"></svg:path>`,
})
export class ArcticonsNexaIconPackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
