import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosReloadIcon],svg[ion-ios-reload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M256 64c105.9 0 191.7 85.7 191.9 191.5l55-52.5 9 9.1-70.3 67.9-66.6-67.9 9-9.1 51.1 52.4c-.3-98.5-80.5-178.6-179.1-178.6-98.8 0-179.2 80.4-179.2 179.2 0 98.8 80.4 179.2 179.2 179.2 78.6 0 145.5-51 169.5-121.6l12.4 3.5C412.3 393.2 340.6 448 256 448c-106 0-192-86-192-192S150 64 256 64z" fill="currentColor"></svg:path>`,
})
export class IonIosReloadIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
