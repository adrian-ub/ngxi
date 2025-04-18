import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoClassicComputerIcon],svg[entypo-classic-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 0H4C2.9 0 2 .899 2 2v15a1 1 0 0 0 1 1v2h14v-2a1 1 0 0 0 1-1V2c0-1.101-.899-2-2-2m-2 15h-4v-1h4zm1-4H5V3h10z"></svg:path>`,
})
export class EntypoClassicComputerIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
