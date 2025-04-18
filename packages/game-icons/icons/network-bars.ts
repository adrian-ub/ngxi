import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsNetworkBarsIcon],svg[game-icons-network-bars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M428.4 27.8v456.4h60.9V27.8zM327 168.2v316h60.8v-316zM225.4 273.6v210.6h61V273.6zM124 343.8v140.4h60.9V343.8zM22.67 394.9v89.3h60.84v-89.3z"></svg:path>`,
})
export class GameIconsNetworkBarsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
