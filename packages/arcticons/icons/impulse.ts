import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsImpulseIcon],svg[arcticons-impulse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.732 28.554V14.428a4.22 4.22 0 0 0-4.228-4.227h-.906a4.226 4.226 0 0 0-4.236 4.227v19.143a4.22 4.22 0 0 1-4.228 4.228h-.906A4.22 4.22 0 0 1 24 33.571V14.428a4.22 4.22 0 0 0-4.228-4.227h-.906a4.225 4.225 0 0 0-4.236 4.227v19.143a4.22 4.22 0 0 1-4.228 4.228h-.906a4.22 4.22 0 0 1-4.227-4.228V19.445"></svg:path><svg:path fill="currentColor" d="M5.268 9.451c.416 0 .75.334.75.75c0 .415-.334.75-.75.75a.75.75 0 0 1-.75-.75c0-.416.335-.75.75-.75m37.464 27.598a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5"></svg:path>`,
})
export class ArcticonsImpulseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
