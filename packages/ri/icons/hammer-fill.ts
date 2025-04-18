import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riHammerFillIcon],svg[ri-hammer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 8V2h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1zm-2 14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V8H2.5V6.074a1 1 0 0 1 .496-.863L8.5 2H15z"></svg:path>`,
})
export class RiHammerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
