import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionMdFunnelIcon],svg[ion-md-funnel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M208 400h96v-47.994h-96V400zM32 112v47.994h448V112H32zm80 168.783h288v-49.555H112v49.555z" fill="currentColor"></svg:path>`,
})
export class IonMdFunnelIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
