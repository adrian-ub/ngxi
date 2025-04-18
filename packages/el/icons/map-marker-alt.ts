import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elMapMarkerAltIcon],svg[el-map-marker-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M600 0C268.629 0 0 268.629 0 600s268.629 600 600 600s600-268.629 600-600S931.371 0 600 0m0 203.247c165.185 0 299.121 133.937 299.121 299.121c0 50.037-13.711 116.091-41.896 153.441L600 996.753L342.773 655.811c-31.029-41.123-41.895-98.199-41.895-153.441c.001-165.186 133.937-299.123 299.122-299.123m0 173.291c-69.503 0-125.83 56.327-125.83 125.83s56.327 125.83 125.83 125.83s125.83-56.327 125.83-125.83s-56.327-125.83-125.83-125.83"></svg:path>`,
})
export class ElMapMarkerAltIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
