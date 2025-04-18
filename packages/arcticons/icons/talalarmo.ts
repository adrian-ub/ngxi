import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTalalarmoIcon],svg[arcticons-talalarmo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.23 11.22A22.6 22.6 0 0 1 16.92 4.5m14.16 0a22.6 22.6 0 0 1 10.69 6.72M24 8.76A17.37 17.37 0 1 1 6.63 26.13A17.35 17.35 0 0 1 24 8.76m-.03 17.37V16.11m9.5 18.02l-9.5-8"></svg:path>`,
})
export class ArcticonsTalalarmoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
