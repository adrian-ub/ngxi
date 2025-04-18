import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamUnderlineIcon],svg[jam-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 10h7a.5.5 0 1 1 0 1h-7a.5.5 0 1 1 0-1M7 2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2v3a4 4 0 1 1-8 0V2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2v3a2 2 0 1 0 4 0z"></svg:path>`,
})
export class JamUnderlineIcon {
  readonly viewBox = input("-7 -6.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
