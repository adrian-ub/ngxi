import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCvsIcon],svg[arcticons-cvs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m42.139 15.225l-5.8-5.8a4.65 4.65 0 0 0-6.574 0L24 15.19l-5.765-5.765a4.65 4.65 0 0 0-6.573 0l-5.8 5.8a4.65 4.65 0 0 0 0 6.573l5.765 5.765L24 39.937l18.139-18.139a4.65 4.65 0 0 0 0-6.573"></svg:path>`,
})
export class ArcticonsCvsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
