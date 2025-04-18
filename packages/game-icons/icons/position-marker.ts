import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsPositionMarkerIcon],svg[game-icons-position-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 17.108c-75.73 0-137.122 61.392-137.122 137.122c.055 23.25 6.022 46.107 11.58 56.262L256 494.892l119.982-274.244h-.063a137.1 137.1 0 0 0 17.202-66.418C393.122 78.5 331.73 17.108 256 17.108m0 68.56a68.56 68.56 0 0 1 68.56 68.562A68.56 68.56 0 0 1 256 222.79a68.56 68.56 0 0 1-68.56-68.56A68.56 68.56 0 0 1 256 85.67z"></svg:path>`,
})
export class GameIconsPositionMarkerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
