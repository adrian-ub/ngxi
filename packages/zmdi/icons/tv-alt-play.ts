import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiTvAltPlayIcon],svg[zmdi-tv-alt-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 88q17 0 29.5 12.5T469 131v256q0 17-12.5 29.5T427 429H43q-18 0-30.5-12.5T0 387V131q0-18 12.5-30.5T43 88h162l-71-70l15-15l86 85l85-85l15 15l-70 70zm0 299V131H43v256zM171 173l149 86l-149 85z"></svg:path>`,
})
export class ZmdiTvAltPlayIcon {
  readonly viewBox = input("0 0 472 432")
  readonly width = input("1.1em")
  readonly height = input("1em")
}
