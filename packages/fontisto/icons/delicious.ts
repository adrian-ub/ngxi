import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoDeliciousIcon],svg[fontisto-delicious-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12H0v12h12zM24 0H12v12h12z"></svg:path>`,
})
export class FontistoDeliciousIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
