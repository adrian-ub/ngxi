import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAttacktheblockIcon],svg[arcticons-attacktheblock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.38 5.5H24v24.13H5.98zM5.98 29.63V42.5L17.5 29.63m8.88 0l3.84 4.3H17.78l3.85-4.3M25.62 5.5H24v24.13h18.02zm16.4 24.13V42.5L30.5 29.63"></svg:path>`,
})
export class ArcticonsAttacktheblockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
