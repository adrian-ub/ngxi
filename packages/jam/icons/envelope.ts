import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamEnvelopeIcon],svg[jam-envelope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.598 2l5.747 5.12a1 1 0 0 0 1.33 0L16.423 2zM18 3.273l-5.994 5.341a3 3 0 0 1-3.992 0L2 3.254V12h16zM2 0h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2"></svg:path>`,
})
export class JamEnvelopeIcon {
  readonly viewBox = input("-2 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
