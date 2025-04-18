import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdBookmarkIcon],svg[ion-md-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M360 64H152c-22.002 0-40 17.998-40 40v344l144-64 144 64V104c0-22.002-17.998-40-40-40z" fill="currentColor"></svg:path>`,
})
export class IonMdBookmarkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
