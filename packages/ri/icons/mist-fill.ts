import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMistFillIcon],svg[ri-mist-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h4v2H4zm12 15h4v2h-4zM2 9h10v2H2zm12 0h6v2h-6zM4 14h6v2H4zm8 0h10v2H12zM10 4h12v2H10zM2 19h12v2H2z"></svg:path>`,
})
export class RiMistFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
