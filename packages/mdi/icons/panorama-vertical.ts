import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPanoramaVerticalIcon],svg[mdi-panorama-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 12c0-3.9.8-6.9 1.4-8.7c.2-.6-.2-1.3-.9-1.3H5c-.7 0-1.2.7-.9 1.3c.6 2.1 1.4 4.8 1.4 8.7s-.8 6.7-1.4 8.7c-.3.6.2 1.3.9 1.3h14c.7 0 1.2-.7 1-1.3c-.7-2-1.5-4.8-1.5-8.7"></svg:path>`,
})
export class MdiPanoramaVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
