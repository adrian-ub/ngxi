import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhToastIcon],svg[whh-toast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 366v530q0 53-37.5 90.5T832 1024H192q-53 0-90.5-37.5T64 896V366q-29-17-46.5-46T0 256q0-70 68.5-128.5t186.5-93T512 0t257 34.5t186.5 93T1024 256q0 35-17.5 64T960 366"></svg:path>`,
})
export class WhhToastIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
