import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosDownloadOutlineIcon],svg[ion-ios-download-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M288 144v16h112v272H112V160h112v-16H96v304h320V144z" fill="currentColor"></svg:path><svg:path d="M193.1 252.3l-11.6 11.6 74.5 74.5 74.5-74.5-11.6-11.6-54.7 54.7V64h-16.4v243z" fill="currentColor"></svg:path>`,
})
export class IonIosDownloadOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
