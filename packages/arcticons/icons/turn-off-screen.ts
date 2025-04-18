import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTurnOffScreenIcon],svg[arcticons-turn-off-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.611 11.744c6.257 8.936 4.83 21.141-3.318 28.393s-20.437 7.252-28.586 0S.132 20.68 6.39 11.744M24 5.083v22.394"></svg:path>`,
})
export class ArcticonsTurnOffScreenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
