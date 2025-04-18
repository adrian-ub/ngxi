import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiHourglassOutlineIcon],svg[zmdi-hourglass-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3h256v128l-85 85l85 85v128H0V301l85-85l-85-85zm213 309l-85-85l-85 85v75h170zm-85-107l85-85V45H43v75z"></svg:path>`,
})
export class ZmdiHourglassOutlineIcon {
  readonly viewBox = input("0 0 256 432")
  readonly width = input("0.6em")
  readonly height = input("1em")
}
