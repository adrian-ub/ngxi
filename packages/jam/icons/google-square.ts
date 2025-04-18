import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamGoogleSquareIcon],svg[jam-google-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.188 9.034a2.97 2.97 0 0 0 .028 2.01a2.973 2.973 0 0 0 4.285 1.522a2.98 2.98 0 0 0 1.283-1.522H10.11V9.066h4.803a5 5 0 0 1-1.783 4.833A5 5 0 1 1 10 5a4.98 4.98 0 0 1 3.191 1.152l-1.62 1.326a2.974 2.974 0 0 0-4.384 1.557z"></svg:path><svg:path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4"></svg:path></svg:g>`,
})
export class JamGoogleSquareIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
