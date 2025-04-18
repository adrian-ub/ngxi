import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnWeatherWindyIcon],svg[typcn-weather-windy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5a1 1 0 1 0 0 2a1 1 0 0 1 0 2H8a1 1 0 1 0 0 2h6a1 1 0 0 1 0 2H7.6c-1.654 0-3 1.346-3 3s1.346 3 3 3a1 1 0 1 0 0-2a1 1 0 0 1 0-2H14c1.654 0 3-1.346 3-3c0-.353-.072-.686-.185-1H19c1.654 0 3-1.346 3-3s-1.346-3-3-3"></svg:path>`,
})
export class TypcnWeatherWindyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
