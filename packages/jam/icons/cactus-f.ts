import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamCactusFIcon],svg[jam-cactus-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 16H0V8.5a2.5 2.5 0 0 1 5 0V11h1V4a4 4 0 1 1 8 0v5h1V6.5a2.5 2.5 0 1 1 5 0V14h-6v6H6zm4-7a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1m0-5a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1"></svg:path>`,
})
export class JamCactusFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
