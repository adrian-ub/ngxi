import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTincIcon],svg[arcticons-tinc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m34.06 4.5l7.55 7.55l-7.55 7.55v-5.66H13.94v8.17h-3.78V10.16h23.9Zm0 21.39h3.78v12h-23.9v5.61L6.39 36l7.55-7.55v5.65h20.12Z"></svg:path>`,
})
export class ArcticonsTincIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
