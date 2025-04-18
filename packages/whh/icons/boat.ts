import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhBoatIcon],svg[whh-boat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 704H704q-27 0-45.5-19T640 640V128q0-27 18.5-45.5T704 64l256 576q0 26-18.5 45T896 704m-128 320H256q-55 0-116-43.5t-100.5-104T0 768h512V32q0-14 9.5-23T544 0t22.5 9t9.5 23v736h448q0 48-39.5 108.5T884 980.5T768 1024M384 704H128q-26 0-45-19t-19-45L384 64q27 0 45.5 18.5T448 128v512q0 26-18.5 45T384 704"></svg:path>`,
})
export class WhhBoatIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
