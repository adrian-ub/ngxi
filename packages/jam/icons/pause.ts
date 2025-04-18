import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamPauseIcon],svg[jam-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m0 2v14h2V2zm10-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m0 2v14h2V2z"></svg:path>`,
})
export class JamPauseIcon {
  readonly viewBox = input("-4 -3 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
