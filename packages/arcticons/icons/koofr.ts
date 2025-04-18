import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKoofrIcon],svg[arcticons-koofr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.768 12.92V7.233a1.557 1.557 0 0 0-1.558-1.557H16.563a1.557 1.557 0 0 0-1.558 1.557v5.687H7.057A1.557 1.557 0 0 0 5.5 14.477v26.29a1.557 1.557 0 0 0 1.557 1.557h33.886a1.557 1.557 0 0 0 1.557-1.557v-26.29a1.557 1.557 0 0 0-1.557-1.557Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.5 19.73H16.798a1.56 1.56 0 0 0-1.51 1.177l-5.4 21.417m24.099-16.183l2.004 4.06l4.48.651l-3.242 3.161l.766 4.462l-4.008-2.107l-4.008 2.107l.765-4.462l-3.242-3.161l4.481-.651z"></svg:path>`,
})
export class ArcticonsKoofrIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
