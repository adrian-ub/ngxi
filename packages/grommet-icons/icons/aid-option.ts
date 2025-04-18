import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsAidOptionIcon],svg[grommet-icons-aid-option-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M12 9v10zm5 5H7zM1 6.995C1 5.893 1.89 5 2.991 5H21.01C22.109 5 23 5.893 23 6.995v14.01C23 22.107 22.11 23 21.009 23H2.99A1.99 1.99 0 0 1 1 21.005zM7 5V2.01C7 1.451 7.456 1 7.995 1h8.01c.55 0 .995.443.995 1.01V5"></svg:path>`,
})
export class GrommetIconsAidOptionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
