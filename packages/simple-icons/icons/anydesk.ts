import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsAnydeskIcon],svg[simple-icons-anydesk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.322 3.677L0 12l8.322 8.323L16.645 12zm7.371.01l-1.849 1.85l6.49 6.456l-6.49 6.49l1.85 1.817L24 11.993Z"></svg:path>`,
})
export class SimpleIconsAnydeskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
