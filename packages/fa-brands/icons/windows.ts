import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBrandsWindowsIcon],svg[fa-brands-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 93.7l183.6-25.3v177.4H0zm0 324.6l183.6 25.3V268.4H0zm203.8 28L448 480V268.4H203.8zm0-380.6v180.1H448V32z"></svg:path>`,
})
export class FaBrandsWindowsIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
