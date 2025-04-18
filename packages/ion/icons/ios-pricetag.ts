import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionIosPricetagIcon],svg[ion-ios-pricetag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M435.2 48H312.3c-3.8 0-7.5 1.5-10.2 4.2L56.4 297.9c-11.2 11.2-11.2 29.5 0 40.7l117 117c11.2 11.2 29.5 11.2 40.7 0L459.7 210c2.7-2.7 4.2-6.4 4.2-10.2v-123C464 60.9 451.1 48 435.2 48zm-47.7 111.8c-20.4 2.2-37.4-14.9-35.3-35.3 1.6-14.8 13.5-26.8 28.3-28.3 20.4-2.2 37.4 14.9 35.3 35.3-1.6 14.8-13.5 26.7-28.3 28.3z" fill="currentColor"></svg:path>`,
})
export class IonIosPricetagIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
