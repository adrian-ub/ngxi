import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelFlagIcon],svg[raphael-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 3v10c8 0 8 4 16 4V7c-8 0-8-4-16-4m-3 26h2V3h-2z"></svg:path>`,
})
export class RaphaelFlagIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
