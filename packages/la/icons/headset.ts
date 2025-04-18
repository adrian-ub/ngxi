import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laHeadsetIcon],svg[la-headset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C9.953 3 5 7.953 5 14v6c0 1.293.844 2.395 2 2.813V23c0 2.746 2.254 5 5 5h1.281c.348.598.98 1 1.719 1h2c1.102 0 2-.898 2-2s-.898-2-2-2h-2c-.738 0-1.371.402-1.719 1H12a3 3 0 0 1-3-3h2v-9H7c0-4.953 4.047-9 9-9s9 4.047 9 9h-4v9h3c1.645 0 3-1.355 3-3v-6c0-6.047-4.953-11-11-11M7 16h2v5H8c-.555 0-1-.445-1-1zm16 0h2v4c0 .555-.445 1-1 1h-1z"></svg:path>`,
})
export class LaHeadsetIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
