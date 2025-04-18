import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamDoorIcon],svg[jam-door-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m0 2v16h8V2zm2 7h1a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2"></svg:path>`,
})
export class JamDoorIcon {
  readonly viewBox = input("-6 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
