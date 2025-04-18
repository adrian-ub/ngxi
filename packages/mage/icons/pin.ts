import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[magePinIcon],svg[mage-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m17.942 6.076l2.442 2.442a1.22 1.22 0 0 1-.147 1.855l-1.757.232a1.7 1.7 0 0 0-.94.452c-.72.696-1.453 1.428-2.674 2.637c-.21.212-.358.478-.427.769l-.94 3.772a1.22 1.22 0 0 1-1.978.379l-3.04-3.052l-3.052-3.04a1.22 1.22 0 0 1 .379-1.978l3.747-.964a1.8 1.8 0 0 0 .77-.44c1.379-1.355 1.88-1.855 2.66-2.698c.233-.25.383-.565.428-.903l.232-1.783a1.22 1.22 0 0 1 1.856-.146zm-9.51 9.498L3.256 20.75"></svg:path>`,
})
export class MagePinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
