import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTemperatureKelvinIcon],svg[mdi-temperature-kelvin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5h3v6l5-6h4l-5.12 5.78L19 20h-3.62l-3.62-6.83L10 15.15V20H7z"></svg:path>`,
})
export class MdiTemperatureKelvinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
