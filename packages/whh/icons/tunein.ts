import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhTuneinIcon],svg[whh-tunein-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 704H704V512q0-53 37.5-90.5T832 384h192v192q0 53-37.5 90.5T896 704m-384 320H320V768h320v128q0 53-37.5 90.5T512 1024M0 576V384h512q53 0 90.5 37.5T640 512v192H128q-53 0-90.5-37.5T0 576m480-256q-66 0-113-47t-47-113t47-113T480 0t113 47t47 113t-47 113t-113 47"></svg:path>`,
})
export class WhhTuneinIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
