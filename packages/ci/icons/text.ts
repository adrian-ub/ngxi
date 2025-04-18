import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciTextIcon],svg[ci-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19h2m0 0h2m-2 0V5m0 0H6v1m6-1h6v1"></svg:path>`,
})
export class CiTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
