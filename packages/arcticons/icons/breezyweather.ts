import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBreezyweatherIcon],svg[arcticons-breezyweather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 24c0-5.9 4.8-10.8 10.8-10.8S45.6 18 45.6 24H24.1Zm0 0c5.9 0 10.8 4.8 10.8 10.8S30 45.6 24 45.6V24.1Zm0 0c0 5.9-4.8 10.8-10.8 10.8S2.5 29.9 2.5 24zm0 0c-5.9 0-10.8-4.8-10.8-10.8S18.1 2.5 24 2.5z"></svg:path><svg:circle cx="24" cy="24" r="12.8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsBreezyweatherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
