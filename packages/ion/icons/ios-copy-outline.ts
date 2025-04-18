import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosCopyOutlineIcon],svg[ion-ios-copy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M304 96h-16v80h80v-16h-64z" fill="currentColor"></svg:path><svg:path d="M325.3 64H160v48h-48v336h240v-48h48V139l-74.7-75zM336 432H128V128h32v272h176v32zm48-48H176V80h142.7l65.3 65.6V384z" fill="currentColor"></svg:path>`,
})
export class IonIosCopyOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
