import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamRecIcon],svg[jam-rec-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12m0 2A8 8 0 1 1 8 0a8 8 0 0 1 0 16"></svg:path>`,
})
export class JamRecIcon {
  readonly viewBox = input("-4 -4 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
