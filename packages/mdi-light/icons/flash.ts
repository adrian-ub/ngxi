import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightFlashIcon],svg[mdi-light-flash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 3l-3.5 7H16l-6 12.03V14H7V3zm-5.11 8l3.49-7H8v9h3v4.79L14.38 11z"></svg:path>`,
})
export class MdiLightFlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
