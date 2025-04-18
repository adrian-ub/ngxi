import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoFramerIcon],svg[tdesign-logo-framer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.086 1H19.5v8.5h-5.086l6.5 6.5H13v7.914l-8.5-8.5V7.5h5.086zm9.328 6.5H17.5V3H7.914zm-.828 2H6.5v5.086l4.5 4.5V14h5.086z"></svg:path>`,
})
export class TdesignLogoFramerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
