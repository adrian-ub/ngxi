import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsElectronbuilderIcon],svg[simple-icons-electronbuilder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7.01a3.506 3.506 0 0 0 3.506-3.505A3.506 3.506 0 0 0 12 0a3.506 3.506 0 0 0-3.506 3.506A3.506 3.506 0 0 0 12 7.01m0 4.137C9.243 8.588 5.574 7.01 1.484 7.01v12.852C5.574 19.863 9.243 21.44 12 24c2.757-2.56 6.426-4.137 10.516-4.137V7.01c-4.09 0-7.759 1.578-10.516 4.137"></svg:path>`,
})
export class SimpleIconsElectronbuilderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
