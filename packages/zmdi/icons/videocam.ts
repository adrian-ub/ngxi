import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiVideocamIcon],svg[zmdi-videocam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m299 160l85-85v234l-85-85v75q0 8-6.5 14.5T277 320H21q-8 0-14.5-6.5T0 299V85q0-8 6.5-14.5T21 64h256q9 0 15.5 6.5T299 85z"></svg:path>`,
})
export class ZmdiVideocamIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
