import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosInformationOutlineIcon],svg[ion-ios-information-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="251.5" cy="172" r="20" fill="currentColor"></svg:circle><svg:path d="M272 344V216h-48v8h16v120h-16v8h64v-8z" fill="currentColor"></svg:path><svg:g><svg:path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 398.7c-105.1 0-190.7-85.5-190.7-190.7 0-105.1 85.5-190.7 190.7-190.7 105.1 0 190.7 85.5 190.7 190.7 0 105.1-85.6 190.7-190.7 190.7z" fill="currentColor"></svg:path></svg:g>`,
})
export class IonIosInformationOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
