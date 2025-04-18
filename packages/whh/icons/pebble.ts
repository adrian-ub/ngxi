import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPebbleIcon],svg[whh-pebble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 640v192h-64v32q0 13-9.5 22.5T672 896h-96v96q0 13-9.5 22.5T544 1024H224q-13 0-22.5-9.5T192 992v-96H96q-13 0-22.5-9.5T64 864V448H0V256h64v-96q0-13 9.5-22.5T96 128h96V32q0-13 9.5-22.5T224 0h320q13 0 22.5 9.5T576 32v96h96q13 0 22.5 9.5T704 160v32h64v192h-64v64h64v128h-64v64zM640 256H128v512h512z"></svg:path>`,
})
export class WhhPebbleIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
