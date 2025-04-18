import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoMobileIcon],svg[fontisto-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 0H2.25A2.25 2.25 0 0 0 0 2.25v19.5A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V2.25A2.25 2.25 0 0 0 12.75 0M7.5 22.5a1.498 1.498 0 1 1 .002-2.996A1.498 1.498 0 0 1 7.5 22.5h-.001z"></svg:path>`,
})
export class FontistoMobileIcon {
  readonly viewBox = input("0 0 15 24")
  readonly width = input("0.63em")
  readonly height = input("1em")
}
