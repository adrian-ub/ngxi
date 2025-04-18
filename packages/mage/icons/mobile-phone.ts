import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageMobilePhoneIcon],svg[mage-mobile-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M16.184 2.75H7.816c-.998 0-1.808.833-1.808 1.86v14.78c0 1.027.81 1.86 1.808 1.86h8.368c.998 0 1.808-.833 1.808-1.86V4.61c0-1.027-.81-1.86-1.808-1.86"></svg:path><svg:path d="M12 18.773a.52.52 0 1 0 0-1.038a.52.52 0 0 0 0 1.038M10.003 5.272h3.994"></svg:path></svg:g>`,
})
export class MageMobilePhoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
