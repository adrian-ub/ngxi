import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSwitchIcon],svg[openmoji-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#9B9B9A" d="M39.938 46.844L57.95 34.393l5.657 5.657l-12.513 18.013"></svg:path><svg:path fill="#D0CFCE" d="M51.539 60C49.717 51.987 42.564 46 34 46s-15.717 5.987-17.538 14z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M10 60h48m-6.461 0C49.717 51.987 42.564 46 34 46s-15.717 5.987-17.538 14z"></svg:path><svg:path stroke-linejoin="round" d="M39.938 46.844L57.95 34.393l5.657 5.657l-12.513 18.013"></svg:path></svg:g>`,
})
export class OpenmojiSwitchIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
