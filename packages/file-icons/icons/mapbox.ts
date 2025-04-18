import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsMapboxIcon],svg[file-icons-mapbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30.118 0v512h75.294V90.354l150.588 256l150.588-256V512h75.294V0h-60.235c-30.118-.096-53.772 7.53-67.059 30.118L256 197.648l-98.588-167.53C144.125 7.53 120.47-.096 90.353.001z"></svg:path>`,
})
export class FileIconsMapboxIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
