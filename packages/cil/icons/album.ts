import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilAlbumIcon],svg[cil-album-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M425.706 86.294A240 240 0 0 0 86.294 425.706A240 240 0 0 0 425.706 86.294M256 464c-114.691 0-208-93.309-208-208S141.309 48 256 48s208 93.309 208 208s-93.309 208-208 208"></svg:path><svg:path fill="currentColor" d="M256 152a104 104 0 1 0 104 104a104.12 104.12 0 0 0-104-104m0 176a72 72 0 1 1 72-72a72.08 72.08 0 0 1-72 72"></svg:path><svg:path fill="currentColor" d="M240 240h32v32h-32zm16-128V80a174.14 174.14 0 0 0-79.968 19.178A177.6 177.6 0 0 0 115.2 150.39l25.586 19.219A142.92 142.92 0 0 1 256 112"></svg:path>`,
})
export class CilAlbumIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
