import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhGoogledriveIcon],svg[whh-googledrive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m376 13l8-13h256l346 576H701zM143 845L0 640L335 81l123 213zm199-205h682L846 896H194z"></svg:path>`,
})
export class WhhGoogledriveIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}
