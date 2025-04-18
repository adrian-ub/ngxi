import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPanoramaIcon],svg[mdi-panorama-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.5 12.5l2.5 3l3.5-4.5l4.5 6H5m18 1V6a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2"></svg:path>`,
})
export class MdiPanoramaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
