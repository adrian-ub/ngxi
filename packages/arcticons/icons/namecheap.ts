import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNamecheapIcon],svg[arcticons-namecheap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.274 36.644a3.69 3.69 0 0 1-3.183-1.818l-10.54-17.909a3.689 3.689 0 0 1 6.358-3.742l10.54 17.908a3.69 3.69 0 0 1-3.175 5.561"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.27 25.682l7.361-12.507a3.689 3.689 0 0 1 6.359 3.742L32.45 34.826M18.73 22.319l-7.361 12.507a3.689 3.689 0 0 1-6.358-3.743l10.54-17.908"></svg:path>`,
})
export class ArcticonsNamecheapIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
