import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFineLockIcon],svg[arcticons-fine-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 24h37M24 24v7.907h.002c.524-1.498 2.19-2.429 3.922-2.19s3.01 1.573 3.009 3.142c-.002 1.57-1.283 2.903-3.016 3.138c-1.732.235-3.397-.699-3.917-2.197v8.7m0-37v7.907h-.002c-.524-1.498-2.19-2.429-3.922-2.19s-3.01 1.573-3.009 3.142c.002 1.57 1.283 2.903 3.016 3.138c1.732.235 3.397-.699 3.917-2.197V24"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsFineLockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
