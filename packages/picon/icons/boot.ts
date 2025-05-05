import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBootIcon],svg[picon-boot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2h5l-.5 2Q8 4 8 6.5H0M0 7h8v1H0m0-8h5v1H0"></svg:path>`,
})
export class PiconBootIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
