import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNetmedsIcon],svg[arcticons-netmeds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.026 9.316c-6.942-2.35-14.474 1.376-16.823 8.323v.002c-2.347 6.947 1.378 14.481 8.32 16.83l12.45 4.213c6.942 2.35 14.475-1.375 16.824-8.322v-.002c2.347-6.947-1.378-14.482-8.32-16.83zm1.688.57v10.828h-9.753V30.96h9.754v6.96m9.816 1.01v-7.97h9.01m-.194-10.246H33.53v-7.505"></svg:path>`,
})
export class ArcticonsNetmedsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
