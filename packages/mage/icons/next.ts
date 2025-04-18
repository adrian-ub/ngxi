import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageNextIcon],svg[mage-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.062 20.25V3.75M3.938 5.416V18.58a1.447 1.447 0 0 0 2.329 1.143l9.113-7.088a1.447 1.447 0 0 0-.087-2.344L6.18 4.216a1.447 1.447 0 0 0-2.242 1.2"></svg:path>`,
})
export class MageNextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
