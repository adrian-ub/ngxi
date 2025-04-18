import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBigIconsIcon],svg[arcticons-big-icons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 16.688h39v14.625h-39z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.165 16.688v4.875H8.84v-4.875m12.99 0v4.875h-4.326v-4.875m21.657 0v4.875h-4.326v-4.875m-4.339 0v4.875h-4.327v-4.875"></svg:path>`,
})
export class ArcticonsBigIconsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
