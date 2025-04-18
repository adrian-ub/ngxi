import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciMenuAlt01Icon],svg[ci-menu-alt-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 17h7M5 12h14M5 7h14"></svg:path>`,
})
export class CiMenuAlt01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
