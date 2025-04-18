import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagSc1x1Icon],svg[flag-sc-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M0 0h512v512H0Z"></svg:path><svg:path fill="#d92223" d="M0 512V0h512v170.7z"></svg:path><svg:path fill="#fcd955" d="M0 512V0h341.3z"></svg:path><svg:path fill="#003d88" d="M0 512V0h170.7z"></svg:path><svg:path fill="#007a39" d="m0 512l512-170.7V512Z"></svg:path>`,
})
export class FlagSc1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
