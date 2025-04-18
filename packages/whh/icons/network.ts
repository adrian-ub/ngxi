import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhNetworkIcon],svg[whh-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 512H832v256h64q26 0 45 19t19 45v128q0 27-19 45.5t-45 18.5H704q-27 0-45.5-18.5T640 960V832q0-26 18.5-45t45.5-19h64V512H320v256h64q26 0 45 19t19 45v128q0 27-19 45.5t-45 18.5H192q-27 0-45.5-18.5T128 960V832q0-26 18.5-45t45.5-19h64V512H32q-13 0-22.5-9.5T0 480t9.5-22.5T32 448h480V256h-64q-27 0-45.5-18.5T384 192V64q0-26 18.5-45T448 0h192q26 0 45 19t19 45v128q0 27-19 45.5T640 256h-64v192h416q13 0 22.5 9.5t9.5 22.5t-9.5 22.5T992 512"></svg:path>`,
})
export class WhhNetworkIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
