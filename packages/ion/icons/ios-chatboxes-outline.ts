import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosChatboxesOutlineIcon],svg[ion-ios-chatboxes-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M64 64h256v96h16V48H48v224h112v-16H64z" fill="currentColor"></svg:path><svg:path d="M176 176v224h162.6l64 64H416v-64h48V176H176zm272 208h-48v54.6L345 384H192V192h256v192z" fill="currentColor"></svg:path>`,
})
export class IonIosChatboxesOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
