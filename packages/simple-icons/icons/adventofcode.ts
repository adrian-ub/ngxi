import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsAdventofcodeIcon],svg[simple-icons-adventofcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.05 13.236l6.498 9.606L18.91 24l-6.905-9.47L5.1 24l-1.637-1.158l6.498-9.606L.553 9.22l.615-1.69l9.596 3.463L11.087 0h1.826l.323 10.993l9.596-3.462l.615 1.69l-9.387 4.015z"></svg:path>`,
})
export class SimpleIconsAdventofcodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
