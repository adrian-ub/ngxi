import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiWatchIcon],svg[zmdi-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 256q0 40-17 75t-48 59l-20 122H85L65 390Q0 339 0 256t65-134L85 0h171l20 122q31 24 48 59t17 75m-298 0q0 53 37.5 90.5T171 384t90.5-37.5T299 256t-37.5-90.5T171 128t-90.5 37.5T43 256"></svg:path>`,
})
export class ZmdiWatchIcon {
  readonly viewBox = input("0 0 344 512")
  readonly width = input("0.68em")
  readonly height = input("1em")
}
