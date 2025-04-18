import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsTileIcon],svg[ls-tile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 311h297V14H0zm369 0h297V14H369zM0 680h297V383H0zm369 0h297V383H369z"></svg:path>`,
})
export class LsTileIcon {
  readonly viewBox = input("0 0 666 680")
  readonly width = input("0.98em")
  readonly height = input("1em")
}
