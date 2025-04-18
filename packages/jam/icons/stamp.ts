import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamStampIcon],svg[jam-stamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 18v-2H2v2zM7 14V9a5 5 0 1 1 6 0v5h5a2 2 0 0 1 2 2v4H0v-4a2 2 0 0 1 2-2zm4 0V8.001l.799-.6a3 3 0 1 0-3.598 0l.799.6V14z"></svg:path>`,
})
export class JamStampIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
