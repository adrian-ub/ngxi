import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsClearscoreIcon],svg[arcticons-clearscore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.09 41.593H42.5V5.5H6.408v17.412h7.432v-9.98h21.227V34.16H25.09zm-10.342-3.717a4.624 4.624 0 0 1-9.248 0h0a4.624 4.624 0 0 1 9.248 0"></svg:path>`,
})
export class ArcticonsClearscoreIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
