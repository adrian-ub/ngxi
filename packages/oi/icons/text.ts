import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiTextIcon],svg[oi-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v2h.5c0-.55.45-1 1-1H3v5.5c0 .28-.22.5-.5.5H2v1h4V7h-.5c-.28 0-.5-.22-.5-.5V1h1.5c.55 0 1 .45 1 1H8V0z"></svg:path>`,
})
export class OiTextIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
