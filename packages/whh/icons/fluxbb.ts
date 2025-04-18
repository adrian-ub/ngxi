import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhFluxbbIcon],svg[whh-fluxbb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M672 960h-64q-13 0-22.5-9.5T576 928v-64q0-13 9.5-22.5T608 832h32V192h-32q-13 0-22.5-9.5T576 160V96q0-13 9.5-22.5T608 64h64q40 0 68 28t28 68v704q0 40-28 68t-68 28m-256 64h-64q-13 0-22.5-9.5T320 992V32q0-13 9.5-22.5T352 0h64q13 0 22.5 9.5T448 32v960q0 13-9.5 22.5T416 1024m-256-64H96q-40 0-68-28T0 864V160q0-40 28-68t68-28h64q13 0 22.5 9.5T192 96v64q0 13-9.5 22.5T160 192h-32v640h32q13 0 22.5 9.5T192 864v64q0 13-9.5 22.5T160 960"></svg:path>`,
})
export class WhhFluxbbIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
