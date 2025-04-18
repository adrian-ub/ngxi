import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdMedalIcon],svg[ion-md-medal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M273.5 152.1H48l54.1-103.9h240.7z" fill="currentColor"></svg:path><svg:circle cx="256.2" cy="377.2" r="86.6" fill="currentColor"></svg:circle><svg:path d="M348.9 299.1l115.1-147-69.3-103.9L256.4 256c32.3 0 62.7 12.7 85.5 35.5 2.5 2.5 4.8 5 7 7.6z" fill="currentColor"></svg:path><svg:path d="M205.8 266.6L152.3 186H48.4l90.1 161.5c5.2-21.2 16.1-40.6 32-56.4 10.4-10.3 22.3-18.6 35.3-24.5z" fill="currentColor"></svg:path>`,
})
export class IonMdMedalIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
