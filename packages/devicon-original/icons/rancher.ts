import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOriginalRancherIcon],svg[devicon-original-rancher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2453FF" d="m127 47.4l-1.4-8.2c-.4-2.6-1.5-4.8-2.3-4.8c-.8 0-1.5 2.2-1.5 4.9v2.2c0 2.6-2.2 4.9-4.9 4.9h-2.6v5.9h8.5c2.8-.2 4.6-2.3 4.2-4.9m-19.4-7H80.8c-.2 0-.3 0-.4.1v-1.3c0-2.6-.7-4.9-1.5-4.9s-1.8 2.2-2.3 4.8l-1.4 8.2c-.4 2.6 1.4 4.8 4.1 4.8h8.1c.8 0 1.6-.1 2.3-.3c-.3 1.4-1.4 2.4-2.9 2.4H75.4c-1.8 0-3.2-1.7-2.9-3.5l1.2-6.9c.3-1.8-1.1-3.5-2.9-3.5H14.3c-1.2 0-2.2.7-2.7 1.8L1 58.4c-.2.3-.2.6.1.9l2 2.4c.3.3.7.3 1 .1l7.2-5.7v34.5c0 1.7 1.3 3 3 3h16c1.7 0 3-1.3 3-3v-12c0-1.7 1.3-3 3-3h39.9c1.7 0 3 1.3 3 3v12c0 1.7 1.3 3 3 3h16c1.7 0 3-1.3 3-3V77.7h-8.5c-2.6 0-4.9-2.2-4.9-4.9v-8.3c0-1.6.8-3 1.9-3.9v9.9c0 2.6 2.2 4.9 4.9 4.9h13.1c2.6 0 4.9-2.2 4.9-4.9V45.4c-.1-2.8-2.3-5-5-5"></svg:path>`,
})
export class DeviconOriginalRancherIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
