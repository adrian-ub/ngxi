import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosPaperplaneIcon],svg[ion-ios-paperplane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M96 249.6l106 46.7L416 96z" fill="currentColor"></svg:path><svg:path d="M416 96L217.9 311.7 269.8 416z" fill="currentColor"></svg:path>`,
})
export class IonIosPaperplaneIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
