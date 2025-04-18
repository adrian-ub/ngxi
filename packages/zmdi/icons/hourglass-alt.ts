import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiHourglassAltIcon],svg[zmdi-hourglass-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3h256v128l-85 85l85 85v128H0V301l85-85l-85-85zm213 309l-85-85l-85 85zM43 120h170V45H43z"></svg:path>`,
})
export class ZmdiHourglassAltIcon {
  readonly viewBox = input("0 0 256 432")
  readonly width = input("0.6em")
  readonly height = input("1em")
}
