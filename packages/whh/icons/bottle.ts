import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhBottleIcon],svg[whh-bottle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 960q-5 26-21.5 45t-42.5 19H128q-26 0-42-18.5T64 960L0 576V448q0-29 19.5-48T77 362.5t47-24.5q40-28 72-66t47-80h-19q-13 0-22.5-9.5T192 160V32q0-13 9.5-22.5T224 0h192q13 0 22.5 9.5T448 32v128q0 13-9.5 22.5T416 192h-19q30 81 111 140q11 9 50 28t60.5 39t21.5 49v128z"></svg:path>`,
})
export class WhhBottleIcon {
  readonly viewBox = input("0 0 640 1024")
  readonly width = input("0.63em")
  readonly height = input("1em")
}
