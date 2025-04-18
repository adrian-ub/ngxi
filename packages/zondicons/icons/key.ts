import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsKeyIcon],svg[zondicons-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.26 11.74L10 14H8v2H6v2l-2 2H0v-4l8.26-8.26a6 6 0 1 1 4 4m4.86-4.62A3 3 0 0 0 15 2a3 3 0 0 0-2.12.88z"></svg:path>`,
})
export class ZondiconsKeyIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
