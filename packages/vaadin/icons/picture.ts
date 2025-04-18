import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinPictureIcon],svg[vaadin-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 14H0V2h16zM1 13h14V3H1z"></svg:path><svg:path fill="currentColor" d="M2 10v2h12v-1s.2-1.7-2-2c-1.9-.3-2.2.6-3.8.6C7.1 9.6 7.3 8 5 8c-1.7 0-3 2-3 2m11-4a2 2 0 1 1-3.999.001A2 2 0 0 1 13 6"></svg:path>`,
})
export class VaadinPictureIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
