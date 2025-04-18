import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiPercentageIcon],svg[mynaui-percentage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 5L5 19m12.5 1c1.667 0 2.5-.857 2.5-3s-.833-3-2.5-3s-2.5.857-2.5 3s.833 3 2.5 3m-11-10C8.167 10 9 9.143 9 7s-.833-3-2.5-3S4 4.857 4 7s.833 3 2.5 3"></svg:path>`,
})
export class MynauiPercentageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
