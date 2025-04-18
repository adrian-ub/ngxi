import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamCastleIcon],svg[jam-castle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 8v9h6V8zm8 11H0v-7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2h2V8a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2h2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2zM8 17v-3H4v-2H2v5zM8 2v4h10V2h-2v2h-6V2zm5 11a2 2 0 0 1 2 2v3h-4v-3a2 2 0 0 1 2-2m-1-4h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2"></svg:path>`,
})
export class JamCastleIcon {
  readonly viewBox = input("-2 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
