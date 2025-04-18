import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTresoritIcon],svg[arcticons-tresorit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.75 34.25v-20.5L24 3.5L6.25 13.75v20.5L24 44.5zm-35.5-8.24L34.61 9.63"></svg:path>`,
})
export class ArcticonsTresoritIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
