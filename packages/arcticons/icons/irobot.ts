import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIrobotIcon],svg[arcticons-irobot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.056 5.5c2.69 0 4.877 2.154 4.877 4.813s-2.187 4.812-4.877 4.812s-4.877-2.154-4.877-4.812S10.365 5.5 13.056 5.5m6.345 15.633c14.375 1.394 17.197-8.665 1.338-6.803l1.807-8.765s5.49-.023 7.327-.023c15.34 0 18.144 13.974 5.052 22.483l7.65 14.475h-11.61zm0 0L14.784 42.5H4.736C5.54 25.627 12.6 21.378 19.401 21.133"></svg:path>`,
})
export class ArcticonsIrobotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
