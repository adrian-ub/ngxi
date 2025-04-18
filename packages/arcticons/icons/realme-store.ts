import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRealmeStoreIcon],svg[arcticons-realme-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.294 18.917c-6.905 16.21-27.227 16.78-34.69.58"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.409 20.824c-3.19-3.025 3.025-5.919 3.266-.822m33.561.844c3.848-3.343-2.28-6.423-2.674-2.05"></svg:path>`,
})
export class ArcticonsRealmeStoreIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
