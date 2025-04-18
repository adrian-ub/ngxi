import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagSc4x3Icon],svg[flag-sc-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M0 0h640v480H0Z"></svg:path><svg:path fill="#d92223" d="M0 480V0h640v160z"></svg:path><svg:path fill="#fcd955" d="M0 480V0h426.7z"></svg:path><svg:path fill="#003d88" d="M0 480V0h213.3z"></svg:path><svg:path fill="#007a39" d="m0 480l640-160v160z"></svg:path>`,
})
export class FlagSc4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
