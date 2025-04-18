import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBonfirePeaksIcon],svg[arcticons-bonfire-peaks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 41.424h8.691v-3.145h2.815l2.317-6.788l1.738 1.738l2.732-9.188l2.814 8.692l1.325-1.407l2.649 7.449h2.814v3.146h8.029l-2.897-6.291l3.973-6.788l-7.615-14.899l-3.725 7.615L24 6.079l-5.753 11.009l-3.476-7.284l-7.533 14.817l3.725 7.118z"></svg:path>`,
})
export class ArcticonsBonfirePeaksIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
