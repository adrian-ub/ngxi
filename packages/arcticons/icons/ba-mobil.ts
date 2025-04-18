import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBaMobilIcon],svg[arcticons-ba-mobil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.001 17.803l5.367 9.296H23.36c-1.392 0-2.638.3-3.632 2.021l-2.806 4.923h24.474L24 3.915L5.794 35.435C-.14 25.987 2.14 13.57 11.042 6.845s21.47-5.522 28.936 2.769s7.348 20.916-.27 29.067S19.5 47.8 10.725 40.91z"></svg:path>`,
})
export class ArcticonsBaMobilIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
