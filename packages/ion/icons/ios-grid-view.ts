import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosGridViewIcon],svg[ion-ios-grid-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M192 192h128v128H192z" fill="currentColor"></svg:path><svg:path d="M64 64v384h384V64H64zm352 128h-80v128h80v16h-80v80h-16v-80H192v80h-16v-80H96v-16h80V192H96v-16h80V96h16v80h128V96h16v80h80v16z" fill="currentColor"></svg:path>`,
})
export class IonIosGridViewIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
