import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGlobalIconPackIcon],svg[arcticons-global-icon-pack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="25.332" r="18.168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.931 23.427h36.132m-24.434-6.385c.256-1.023-.27-1.853-1.175-1.853s-1.846.83-2.102 1.853s.27 1.854 1.175 1.854s1.846-.83 2.102-1.854m-1.638-8.02L13.117 4.5m22.765 18.93v6.833c0 3.78-3.078 6.858-6.858 6.858H18.972c-3.78 0-6.859-3.078-6.859-6.858v-6.834"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.05 23.43v6.833a3.025 3.025 0 0 1-3.026 3.027H18.972a3.025 3.025 0 0 1-3.027-3.027v-6.834m14.421-6.387c-.256-1.023.27-1.853 1.175-1.853s1.845.83 2.101 1.853s-.27 1.854-1.175 1.854s-1.845-.83-2.101-1.854m1.638-8.02L34.878 4.5"></svg:path>`,
})
export class ArcticonsGlobalIconPackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
