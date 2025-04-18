import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhInstagramthreeIcon],svg[whh-instagramthree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-768-960q-26 0-45 18.5t-19 45.5v192h64zm384 832q87 0 160.5-43t116.5-116.5t43-160.5t-43-160.5t-116.5-116.5t-160.5-43t-160.5 43t-116.5 116.5t-43 160.5t43 160.5t116.5 116.5t160.5 43m448-768q0-27-18.5-45.5t-45.5-18.5h-640v226q110-98 256-98q84 0 158 34t128 94h162zm-192 96v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5m-256 160q80 0 136 56t56 136t-56 136t-136 56t-136-56t-56-136t56-136t136-56"></svg:path>`,
})
export class WhhInstagramthreeIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
