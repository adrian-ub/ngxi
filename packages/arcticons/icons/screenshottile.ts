import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsScreenshottileIcon],svg[arcticons-screenshottile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.5 5.5h-7c-2.2 0-4 1.8-4 4v7m37 0v-7c0-2.2-1.8-4-4-4h-7m-26 26v7c0 2.2 1.8 4 4 4h7m15 0h7c2.2 0 4-1.8 4-4v-7"></svg:path><svg:circle cx="24" cy="24" r="6.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsScreenshottileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
