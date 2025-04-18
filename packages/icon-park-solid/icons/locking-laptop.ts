import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidLockingLaptopIcon],svg[icon-park-solid-locking-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 9H11a3 3 0 0 0-3 3v21h32v-5"></svg:path><svg:path fill="currentColor" d="M4 33h40v2a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6z"></svg:path><svg:rect width="12" height="8" x="30" y="13" fill="currentColor" rx="3"></svg:rect><svg:path fill="currentColor" d="M36 7a3 3 0 0 1 3 3v3h-6v-3a3 3 0 0 1 3-3Z"></svg:path></svg:g>`,
})
export class IconParkSolidLockingLaptopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
