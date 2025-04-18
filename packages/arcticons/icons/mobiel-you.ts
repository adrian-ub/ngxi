import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMobielYouIcon],svg[arcticons-mobiel-you-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.032 16.131s-6.473-3.54-11.227-3.54s-9.912 4.046-9.912 9.305c0 3.588 1.315 5.36 1.315 5.36c-5.664-2.24-6.675-6.574-6.675-9.81S11.657 4.5 25.007 4.5c8.294 0 14.261 4.147 14.261 4.147zM11.777 31.335s6.079 4.074 12.41 4.074c4.754 0 9.912-4.046 9.912-9.305c0-3.588-1.314-5.36-1.314-5.36c5.663 2.24 6.675 6.574 6.675 9.81S37.336 43.5 23.985 43.5c-9.361 0-15.445-4.68-15.445-4.68z"></svg:path>`,
})
export class ArcticonsMobielYouIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
