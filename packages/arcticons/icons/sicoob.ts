import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSicoobIcon],svg[arcticons-sicoob-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.239 41.164L5.127 9.848a.945.945 0 0 1 .815-1.42l36.113-.063a.945.945 0 0 1 .82 1.416l-18.002 31.38a.942.942 0 0 1-1.633.003Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m28.369 22.074l-8.742.083l4.3-7.632Zm-4.441-7.557L20.463 8.47m-.823 13.685l-3.638 6.307m12.372-6.384h7.16"></svg:path>`,
})
export class ArcticonsSicoobIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
