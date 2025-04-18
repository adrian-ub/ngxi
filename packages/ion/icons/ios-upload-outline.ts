import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosUploadOutlineIcon],svg[ion-ios-upload-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M288 144v16h112v272H112V160h112v-16H96v304h320V144z" fill="currentColor"></svg:path><svg:path d="M193.1 118.1l-11.6-11.6L256 32l74.5 74.5-11.6 11.6-54.7-54.7v243h-16.4v-243z" fill="currentColor"></svg:path>`,
})
export class IonIosUploadOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
