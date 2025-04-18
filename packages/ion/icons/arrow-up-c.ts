import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionArrowUpCIcon],svg[ion-arrow-up-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M128.4 189.3L233.4 89c5.8-6 13.7-9 22.4-9s16.5 3 22.4 9l105.4 100.3c12.5 11.9 12.5 31.3 0 43.2-12.5 11.9-32.7 11.9-45.2 0L288 184.4v217c0 16.9-14.3 30.6-32 30.6s-32-13.7-32-30.6v-217l-50.4 48.2c-12.5 11.9-32.7 11.9-45.2 0-12.5-12-12.5-31.3 0-43.3z" fill="currentColor"></svg:path>`,
})
export class IonArrowUpCIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
