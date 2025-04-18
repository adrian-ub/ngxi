import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPanoramaHorizontalFilledIcon],svg[tabler-panorama-horizontal-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.31 4.591A2 2 0 0 1 22 6.464v11c0 1.382-1.38 2.38-2.694 1.897c-4.879-1.845-9.734-1.845-14.612 0C3.39 19.856 2 18.88 2 17.49V6.458a2 2 0 0 1 2.676-1.87l.025.012l.448.162c4.572 1.623 9.123 1.622 13.703-.003z"></svg:path>`,
})
export class TablerPanoramaHorizontalFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
