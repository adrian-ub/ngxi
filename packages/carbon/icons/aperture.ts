import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonApertureIcon],svg[carbon-aperture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m11.84 12.14L22 17.52V5.62a12 12 0 0 1 5.84 8.52M12 18.68v-5.36L16 11l4 2.31v5.36L16 21Zm8-14V11l-9.66-5.58A11.9 11.9 0 0 1 20 4.7Zm-11.52 2L14 9.85L4 15.62a12 12 0 0 1 4.48-8.96ZM4.16 17.85L10 14.47v11.91a12 12 0 0 1-5.84-8.53M12 27.3V21l9.67 5.58A11.9 11.9 0 0 1 16 28a12 12 0 0 1-4-.7m11.52-2L18 22.14l10-5.77a12 12 0 0 1-4.48 8.97Z"></svg:path>`,
})
export class CarbonApertureIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
