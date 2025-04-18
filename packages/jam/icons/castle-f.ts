import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamCastleFIcon],svg[jam-castle-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 8v11h-3v-4a2 2 0 1 0-4 0v4H0v-8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V8a2 2 0 0 1-2-2V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2m-6 1a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z"></svg:path>`,
})
export class JamCastleFIcon {
  readonly viewBox = input("-2 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
