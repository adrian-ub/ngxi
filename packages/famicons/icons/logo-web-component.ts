import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsLogoWebComponentIcon],svg[famicons-logo-web-component-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="m179.9 388l-76.16-132zm0 0h152.21l76.15-132l-76.15-132H179.9l-76.16 132zm-76.16-132l76.16-132z"></svg:path><svg:path fill="currentColor" d="M496 256L376 48H239.74l-43.84 76h136.21l76.15 132l-76.15 132H195.9l43.84 76H376z"></svg:path><svg:path fill="currentColor" d="m179.9 388l-76.16-132l76.16-132l43.84-76H136L16 256l120 208h87.74z"></svg:path>`,
})
export class FamiconsLogoWebComponentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
