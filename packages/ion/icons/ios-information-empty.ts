import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosInformationEmptyIcon],svg[ion-ios-information-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="251.5" cy="172" r="20" fill="currentColor"></svg:circle><svg:path d="M272 344V216h-48v8h16v120h-16v8h64v-8z" fill="currentColor"></svg:path>`,
})
export class IonIosInformationEmptyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
