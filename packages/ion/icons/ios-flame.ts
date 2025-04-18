import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosFlameIcon],svg[ion-ios-flame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M220.1 48C249.1 182.6 111 179.9 112 315.4c.8 111 118.4 148.6 144.5 148.6 26.1 0 134.8-23.6 143.1-148.6 7.1-106.4-81.7-208-179.5-267.4zm74.3 354.7c-10.2 38.9-66 39-76.4.1-1.5-5.6-2.4-11.5-2.4-17.5 0-41 40.6-88.3 40.6-88.3s40.4 47.3 40.4 88.3c.1 6-.7 11.8-2.2 17.4z" fill="currentColor"></svg:path>`,
})
export class IonIosFlameIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
