import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epCameraFilledIcon],svg[ep-camera-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 224a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h704a64 64 0 0 0 64-64V288a64 64 0 0 0-64-64H748.416l-46.464-92.672A64 64 0 0 0 644.736 96H379.328a64 64 0 0 0-57.216 35.392L275.776 224zm352 435.2a115.2 115.2 0 1 0 0-230.4a115.2 115.2 0 0 0 0 230.4m0 140.8a256 256 0 1 1 0-512a256 256 0 0 1 0 512"></svg:path>`,
})
export class EpCameraFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
