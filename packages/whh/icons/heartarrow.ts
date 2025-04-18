import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhHeartarrowIcon],svg[whh-heartarrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m951 119l73 73l-163 41q35 55 35 119q0 111-43.5 207T705 761l-257 263l-201-205l-66 66l75 75l-256 64l64-256l72 72l66-67l-12-12Q86 655 43 559.5T0 352q0-93 65.5-158.5T224 128t158.5 65.5T448 352q0-93 65.5-158.5T672 128q64 0 119 35L832 0l73 73l59-58q9-10 22.5-10t23 9.5t9.5 23t-10 22.5z"></svg:path>`,
})
export class WhhHeartarrowIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
