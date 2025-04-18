import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesControlsCameraOffSolidIcon],svg[bubbles-controls-camera-off-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2.11 4.288a.17.17 0 0 0-.186-.034a1 1 0 0 0-.59.913v6a1 1 0 0 0 1 1h7.252a.166.166 0 0 0 .118-.285zm12.381.679l-2 1.141a.96.96 0 0 0-.491.833v2.451a.97.97 0 0 0 .491.833l2 1.141A1 1 0 0 0 16 10.533V5.8a1 1 0 0 0-1.509-.833"></svg:path><svg:path d="M11.382 10.44a.17.17 0 0 1-.049-.118V5.167a1 1 0 0 0-1-1H5.18a.17.17 0 0 1-.118-.049L1.138.196a.667.667 0 0 0-.943.942l14.667 14.667a.667.667 0 0 0 .943-.943z"></svg:path></svg:g>`,
})
export class BubblesControlsCameraOffSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
