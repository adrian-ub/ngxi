import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceAmusementParkIcon],svg[guidance-amusement-park-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M16.127 20a9 9 0 0 0 2.559-1.975M8 20.065a9 9 0 0 1-2.686-2.04M5.5 23.5s5.122 0 5.697-9.667M18.5 23.5s-5.122 0-5.698-9.667m-7.488 4.192a2 2 0 1 1-1.877-3.247m1.877 3.247a2 2 0 0 0-1.877-3.247m0 0A9 9 0 0 1 3 12c0-.97.153-1.903.437-2.778m0 0q.163.027.336.028a2 2 0 0 0 1.54-3.275M3.438 9.222a2 2 0 1 1 1.877-3.247m0 0a9 9 0 0 1 4.81-2.78m0 0a2 2 0 0 0 3.752 0m-3.752 0a2 2 0 1 1 3.751 0m0 0a9 9 0 0 1 4.811 2.78m0 0a2 2 0 1 1 1.877 3.247m-1.877-3.247a2 2 0 0 0 1.877 3.247m0 0c.284.875.437 1.809.437 2.778s-.153 1.903-.437 2.778m0 0a2 2 0 0 0-1.877 3.247m1.877-3.247a2 2 0 1 1-1.877 3.247m-7.489-4.192a2 2 0 0 0 1.605 0m-1.605 0a2 2 0 1 1 1.605 0"></svg:path>`,
})
export class GuidanceAmusementParkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
