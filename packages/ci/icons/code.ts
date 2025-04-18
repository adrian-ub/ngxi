import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciCodeIcon],svg[ci-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 7l5 5l-5 5m-6 0l-5-5l5-5"></svg:path>`,
})
export class CiCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
