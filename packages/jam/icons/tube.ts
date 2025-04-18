import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamTubeIcon],svg[jam-tube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7a1 1 0 1 1 0 2v2a1 1 0 0 1 0 2v4a1 1 0 0 0 2 0V2H2zM0 0h6v17a3 3 0 0 1-6 0z"></svg:path>`,
})
export class JamTubeIcon {
  readonly viewBox = input("-9 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
