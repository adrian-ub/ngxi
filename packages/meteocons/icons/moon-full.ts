import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsMoonFullIcon],svg[meteocons-moon-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="256" cy="256" r="140" fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="15"></svg:circle>`,
})
export class MeteoconsMoonFullIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
