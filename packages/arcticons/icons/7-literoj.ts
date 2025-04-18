import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons7LiterojIcon],svg[arcticons-7-literoj-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 9.189h19.622L11.83 38.811m30.67 0H22.878L36.17 9.189m-6.065 13.516H9.804"></svg:path>`,
})
export class Arcticons7LiterojIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
