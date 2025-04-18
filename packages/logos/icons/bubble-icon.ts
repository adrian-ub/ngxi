import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosBubbleIconIcon],svg[logos-bubble-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#262626" d="M156.688 71.53c-24.76 0-49.164 10.63-67.795 31.529V0H52.024v173.519c0 56.326 45.661 101.988 101.988 101.988S256 229.845 256 173.519S213.014 71.531 156.688 71.531m-2.676 164.694c-34.632 0-62.707-28.075-62.707-62.706s28.075-62.707 62.707-62.707c34.631 0 62.706 28.075 62.706 62.707s-28.075 62.706-62.706 62.706"></svg:path><svg:path fill="#00F" d="M25.22 225.066c-13.93 0-25.22 11.292-25.22 25.22s11.291 25.22 25.22 25.22s25.22-11.292 25.22-25.22s-11.291-25.22-25.22-25.22"></svg:path>`,
})
export class LogosBubbleIconIcon {
  readonly viewBox = input("0 0 256 276")
  readonly width = input("0.93em")
  readonly height = input("1em")
}
