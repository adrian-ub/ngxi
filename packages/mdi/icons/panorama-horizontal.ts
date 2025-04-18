import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPanoramaHorizontalIcon],svg[mdi-panorama-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5.5c-3.9 0-6.9-.8-8.7-1.4c-.6-.3-1.3.2-1.3.9v14c0 .7.7 1.2 1.3 1c2.1-.7 4.8-1.5 8.7-1.5s6.7.8 8.7 1.5c.7.2 1.3-.3 1.3-1V5c0-.7-.7-1.2-1.3-.9c-2 .6-4.8 1.4-8.7 1.4"></svg:path>`,
})
export class MdiPanoramaHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
