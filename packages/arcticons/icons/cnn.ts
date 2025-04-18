import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCnnIcon],svg[arcticons-cnn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 15.935v16.13l-12.56-16.13v16.13l-12.56-16.13v16.13h-5.815a8.065 8.065 0 0 1 0-16.13h2.829"></svg:path>`,
})
export class ArcticonsCnnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
