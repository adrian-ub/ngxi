import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhMiddlefingerIcon],svg[whh-middlefinger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 1024H192q-30 0-73.5-69.5T64 831q-2-8-21-77.5T12 615T0 480v-32q0-26 19-45t45-19q27 0 45.5 15.5T128 427v-44q0-26 19-45t45.5-19t45 19t18.5 45q0-58 2-112.5t8-121.5t20-108t34-41q45 0 54.5 45.5T384 256q0 13 3.5 27t9 26t12.5 23.5t14 20.5t12.5 16t9 11l3.5 4q0-27 19-45.5t45.5-18.5t45 18.5T576 384v64q0-27 19-45.5t45.5-18.5t45 18.5T704 448v352q0 169-90 213q-21 11-38 11"></svg:path>`,
})
export class WhhMiddlefingerIcon {
  readonly viewBox = input("0 0 704 1024")
  readonly width = input("0.69em")
  readonly height = input("1em")
}
