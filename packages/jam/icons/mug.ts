import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamMugIcon],svg[jam-mug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm10.874 1H16a4 4 0 0 1 4 4v3a4 4 0 0 1-4 4h-1v2a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h7a4 4 0 0 1 3.874 3M15 12h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1z"></svg:path>`,
})
export class JamMugIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
