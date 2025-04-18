import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiVideocamOffIcon],svg[zmdi-videocam-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M405 99v228L167 88h132q8 0 14.5 6.5T320 109v75zM27 3l378 378l-27 27l-68-68q-6 4-11 4H43q-9 0-15.5-6.5T21 323V109q0-8 6.5-14.5T43 88h15L0 30z"></svg:path>`,
})
export class ZmdiVideocamOffIcon {
  readonly viewBox = input("0 0 408 408")
  readonly width = input("1em")
  readonly height = input("1em")
}
