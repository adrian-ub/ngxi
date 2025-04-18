import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsCollaboraonlineIcon],svg[simple-icons-collaboraonline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.852 0L3.55 5.303L10.247 12L3.55 18.698L8.852 24l12-12zM3.147 5.706v12.588L9.442 12z"></svg:path>`,
})
export class SimpleIconsCollaboraonlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
