import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhBarchartdescIcon],svg[whh-barchartdesc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 577H736q-13 0-22.5-9.5T704 545l87-87l-444-354q-23-15-26-39t15.5-43T384 .5T436 14l445 354l111-111q13 0 22.5 9.5t9.5 22.5v256q0 13-9.5 22.5T992 577m-640-64h192q13 0 22.5 9.5T576 545v448q0 13-9.5 22.5T544 1025H352q-13 0-22.5-9.5T320 993V545q0-13 9.5-22.5T352 513m-128 512H32q-13 0-22.5-9.5T0 993V289q0-13 9.5-22.5T32 257h192q13 0 22.5 9.5T256 289v704q0 13-9.5 22.5T224 1025m448-320h192q13 0 22.5 9.5T896 737v256q0 13-9.5 22.5T864 1025H672q-13 0-22.5-9.5T640 993V737q0-13 9.5-22.5T672 705"></svg:path>`,
})
export class WhhBarchartdescIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}
