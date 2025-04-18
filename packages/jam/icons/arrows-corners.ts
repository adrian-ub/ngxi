import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamArrowsCornersIcon],svg[jam-arrows-corners-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 0h6a1 1 0 1 1 0 2H3.414L18 16.586V13a1 1 0 0 1 2 0v6a1 1 0 0 1-1 1h-6a1 1 0 0 1 0-2h3.586L2 3.414V7a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1"></svg:path>`,
})
export class JamArrowsCornersIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
