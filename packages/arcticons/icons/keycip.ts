import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeycipIcon],svg[arcticons-keycip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.567 24.827h2.898v2.898h-2.898zm4.984 0h2.898v2.898h-2.898zm4.984 0h2.898v2.898h-2.898zm4.985 0h2.898v2.898H32.52zm-19.938 4.984h2.898v2.898h-2.898zm4.985 0h2.898v2.898h-2.898zm4.984 0h2.898v2.898h-2.898zm4.984 0h2.898v2.898h-2.898zm4.985 0h2.898v2.898H32.52z"></svg:path><svg:rect width="32.457" height="22.024" x="7.771" y="20.476" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.012"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.316 20.476c-.403-20.261 25.103-19.672 24.717 0M17.625 36.695h12.751v2.898H17.625zm-5.043-11.868h2.898v2.898h-2.898z"></svg:path>`,
})
export class ArcticonsKeycipIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
