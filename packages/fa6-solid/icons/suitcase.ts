import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidSuitcaseIcon],svg[fa6-solid-suitcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 56v40h160V56c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8m-48 40V56c0-30.9 25.1-56 56-56h144c30.9 0 56 25.1 56 56v424H128zm-64 0h32v384H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64m384 384h-32V96h32c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64"></svg:path>`,
})
export class Fa6SolidSuitcaseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
