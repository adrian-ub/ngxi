import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMistLineIcon],svg[ri-mist-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h4v2H4zm12 15h4v2h-4zM2 9h5v2H2zm7 0h3v2H9zm5 0h6v2h-6zM4 14h6v2H4zm8 0h3v2h-3zm5 0h5v2h-5zM10 4h12v2H10zM2 19h12v2H2z"></svg:path>`,
})
export class RiMistLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
