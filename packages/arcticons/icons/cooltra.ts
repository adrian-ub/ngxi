import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCooltraIcon],svg[arcticons-cooltra-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.4 12.737Q40.714 24 30.4 35.263"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.727 24.18c0-13.838 24.718-8.223 24.718 0c0 7.66-24.718 13.681-24.718 0m34.241-3.626a16.2 16.2 0 0 1 0 6.903q4.61-3.457 0-6.903"></svg:path>`,
})
export class ArcticonsCooltraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
