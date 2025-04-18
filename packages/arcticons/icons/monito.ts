import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMonitoIcon],svg[arcticons-monito-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.128 4.5h7.57a13.101 13.101 0 0 1 0 26.202h-7.57m7.569 0L29.467 43.5m-12.77-39h22.176M9.127 17.601h29.746"></svg:path>`,
})
export class ArcticonsMonitoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
