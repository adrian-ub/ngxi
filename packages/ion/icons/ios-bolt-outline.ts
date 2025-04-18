import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosBoltOutlineIcon],svg[ion-ios-bolt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M273.9 132l-16.5 89.1L254 240h84l-99.8 140 16.5-89.1L258 272h-83.9l99.8-140m28.8-68L143 288h95.8l-29.5 160L369 224h-95.8l29.5-160z" fill="currentColor"></svg:path>`,
})
export class IonIosBoltOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
