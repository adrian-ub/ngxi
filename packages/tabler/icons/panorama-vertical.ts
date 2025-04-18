import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPanoramaVerticalIcon],svg[tabler-panorama-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.463 4.338q-2.898 7.658 0 15.317A1 1 0 0 1 17.529 21h-11c-.692 0-1.208-.692-.962-1.34q2.898-7.66 0-15.321C5.321 3.691 5.81 3 6.502 3H17.53c.693 0 1.18.691.935 1.338z"></svg:path>`,
})
export class TablerPanoramaVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
