import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhAdobeIcon],svg[whh-adobe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 320L352 704h160l82 192H0L384 0h256l384 896H759z"></svg:path>`,
})
export class WhhAdobeIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}
