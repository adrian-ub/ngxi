import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmSignInIcon],svg[charm-sign-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.25 2.25h-3.5v12h3.5m4-9.5l-3.5 3.5l3.5 3.5m5-3.5h-8.5"></svg:path>`,
})
export class CharmSignInIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
