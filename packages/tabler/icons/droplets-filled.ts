import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDropletsFilledIcon],svg[tabler-droplets-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12.003c.541 0 1.045.273 1.342.727l2.122 3.273a3.999 3.999 0 0 1-6.035 5.063c-1.487-1.248-1.864-3.382-.867-5.11L4.66 12.73A1.6 1.6 0 0 1 6 12.003m12 0c.541 0 1.045.273 1.342.727l2.122 3.273a3.999 3.999 0 0 1-6.035 5.063c-1.487-1.248-1.864-3.382-.867-5.11l2.098-3.227a1.6 1.6 0 0 1 1.34-.726m-6-10c.541 0 1.045.273 1.342.727l2.122 3.273a3.999 3.999 0 0 1-6.035 5.063c-1.487-1.248-1.864-3.382-.867-5.11L10.66 2.73A1.6 1.6 0 0 1 12 2.003"></svg:path>`,
})
export class TablerDropletsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
