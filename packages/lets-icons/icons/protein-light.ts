import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsProteinLightIcon],svg[lets-icons-protein-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M9.3 5.681c1.338-1.824 4.062-1.824 5.4 0l.768 1.046a16.1 16.1 0 0 1 3.014 7.706a5.43 5.43 0 0 1-3.902 5.83l-.768.22a6.6 6.6 0 0 1-3.624 0l-.768-.22a5.43 5.43 0 0 1-3.902-5.83a16.1 16.1 0 0 1 3.015-7.706z"></svg:path>`,
})
export class LetsIconsProteinLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
