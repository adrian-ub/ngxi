import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsObimyIcon],svg[arcticons-obimy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.1 31.75c-1.6 1.5-3.7 2.4-5.9 2.4s-4.4-.9-6-2.4m3.9-13.7c-1.4-1.4-3.3-2.2-5.3-2.2c-1.9 0-3.8.8-5.2 2.1m24.8.1c-1.4-1.4-3.3-2.2-5.3-2.2c-1.9 0-3.8.8-5.2 2.1"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4"></svg:path>`,
})
export class ArcticonsObimyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
