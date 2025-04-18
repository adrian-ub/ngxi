import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciItalicIcon],svg[ci-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 19h2m0 0h2m-2 0l4-14m-2 0h2m0 0h2"></svg:path>`,
})
export class CiItalicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
