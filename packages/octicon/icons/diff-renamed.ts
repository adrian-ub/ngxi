import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconDiffRenamedIcon],svg[octicon-diff-renamed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M6 9H3V7h3V4l5 4l-5 4V9zm8-7v12c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h12c.55 0 1 .45 1 1zm-1 0H1v12h12V2z" fill="currentColor"></svg:path>`,
})
export class OcticonDiffRenamedIcon {
  readonly viewBox = input("0 0 14 16")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
