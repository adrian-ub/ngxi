import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmPadlockIcon],svg[charm-padlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 6.75h10.5v7.5H2.75zm2-.5s-1-4.5 3.25-4.5s3.25 4.5 3.25 4.5"></svg:path>`,
})
export class CharmPadlockIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
