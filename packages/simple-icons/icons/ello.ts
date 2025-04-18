import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsElloIcon],svg[simple-icons-ello-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0C5.377 0 0 5.377 0 12s5.377 12 12 12s12-5.377 12-12S18.623 0 12 0m6.96 13.8c-.8 3.16-3.68 5.4-6.96 5.4s-6.16-2.24-6.96-5.4c-.08-.36.12-.76.48-.84s.76.12.84.48c.68 2.56 3 4.36 5.64 4.36s4.96-1.8 5.64-4.36c.08-.36.48-.6.84-.48c.36.08.6.48.48.84"></svg:path>`,
})
export class SimpleIconsElloIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
