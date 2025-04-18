import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSmartcontrolIcon],svg[arcticons-smartcontrol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 35.5v-23c0-2.2-1.8-4-4-4h-31c-2.2 0-4 1.8-4 4v23c0 2.2 1.8 4 4 4h31c2.2 0 4-1.8 4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.5 39.5c2.2 0 4.2-.8 6-2c1.6-1.2 2.9-2.7 3.8-4.5s1.7-3.6 2.2-5.5c.7-2.3 1.1-4.7 2-7c.8-2.3 2.2-4.4 4-6c1.7-1.3 3.8-2 6-2m-39 23c2.2 0 4.2-.8 6-2c1.6-1.2 2.9-2.7 3.8-4.5s1.7-3.6 2.2-5.5c.7-2.3 1.1-4.7 2-7c.8-2.3 2.2-4.4 4-6c1.7-1.3 3.8-2 6-2"></svg:path>`,
})
export class ArcticonsSmartcontrolIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
