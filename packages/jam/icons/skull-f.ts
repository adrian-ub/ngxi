import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamSkullFIcon],svg[jam-skull-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 17.858a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-.865a7.5 7.5 0 0 1-4-6.635v-2a7.5 7.5 0 0 1 7.5-7.5h5a7.5 7.5 0 0 1 7.5 7.5v2a7.5 7.5 0 0 1-4 6.635zm-10-6a2 2 0 1 0 0-4a2 2 0 0 0 0 4m8 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-4 4a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1"></svg:path>`,
})
export class JamSkullFIcon {
  readonly viewBox = input("-2 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
