import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNovaIcon],svg[arcticons-nova-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.5 41.695l11.608-25.393c1.9-3.801 7.255-6.892 10.882.363l4.91 10.64m-17.8-6.61l4.91 10.64c3.627 7.254 8.256 4.831 10.882.362L42.5 6.305"></svg:path>`,
})
export class ArcticonsNovaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
