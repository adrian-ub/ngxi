import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiGamepadIcon],svg[zmdi-gamepad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m277 120l-64 64l-64-64V3h128zm-160 32l64 64l-64 64H0V152zm32 160l64-64l64 64v117H149zm160-160h118v128H309l-64-64z"></svg:path>`,
})
export class ZmdiGamepadIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}
