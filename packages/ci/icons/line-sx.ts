import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciLineSxIcon],svg[ci-line-sx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 10h-2v4h2v-4Z"></svg:path>`,
})
export class CiLineSxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
