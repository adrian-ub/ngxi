import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhAlignhorizontalcenterIcon],svg[whh-alignhorizontalcenter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 960H448q0 26-18.5 45t-45 19t-45.5-19t-19-45H64q-26 0-45-18.5T0 896V640q0-26 19-45t45-19h256V448H192q-26 0-45-18.5T128 384V128q0-26 19-45t45-19h128q0-26 19-45t45.5-19t45 19T448 64h128q27 0 45.5 19t18.5 45v256q0 27-18.5 45.5T576 448H448v128h256q27 0 45.5 19t18.5 45v256q0 27-18.5 45.5T704 960M480 320q13 0 22.5-9.5T512 288v-64q0-13-9.5-22.5T480 192H288q-13 0-22.5 9.5T256 224v64q0 13 9.5 22.5T288 320z"></svg:path>`,
})
export class WhhAlignhorizontalcenterIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
