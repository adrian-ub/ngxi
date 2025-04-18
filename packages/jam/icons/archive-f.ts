import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamArchiveFIcon],svg[jam-archive-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 5H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1zm1 2v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7zM8 14a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2z"></svg:path>`,
})
export class JamArchiveFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
