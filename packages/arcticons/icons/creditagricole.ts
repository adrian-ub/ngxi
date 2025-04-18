import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCreditagricoleIcon],svg[arcticons-creditagricole-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.97 37.07h38.06M19.91 12.38C10.85 13.5 4.5 16.82 4.5 24c0 4.38 4.51 6.53 8.66 6.53c8.61 0 21.7-8.31 30.34-13.18"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.98 25.23l6.89-12.85l9.91 19.04m6.72-20.49a86 86 0 0 1-9.1 5.12"></svg:path>`,
})
export class ArcticonsCreditagricoleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
