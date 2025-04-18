import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBasitIcon],svg[arcticons-basit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.194 20.575C26.76 9.987 20.89 7.89 16.8 7.89S4.5 10.79 4.5 24.839c0 12.615 10.624 15.271 13.559 15.271h16.39c5.312 0 9.05-4.857 9.05-11.008S40.74 17.36 35.184 17.36c-4.403 0-5.836 1.608-6.99 3.215"></svg:path>`,
})
export class ArcticonsBasitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
