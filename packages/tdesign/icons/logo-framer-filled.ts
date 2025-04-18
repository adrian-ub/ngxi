import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoFramerFilledIcon],svg[tdesign-logo-framer-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.085 1H19.5v7.62h-5.966l7.38 7.38H13v7.913l-7.612-7.611l-.005-7.92l5.088.004z"></svg:path>`,
})
export class TdesignLogoFramerFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
