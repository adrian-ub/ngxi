import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiHeaderIcon],svg[oi-header-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v1h.5c.28 0 .5.22.5.5v4c0 .28-.22.5-.5.5H0v1h3V6h-.5c-.28 0-.5-.22-.5-.5V4h3v1.5c0 .28-.22.5-.5.5H4v1h3V6h-.5c-.28 0-.5-.22-.5-.5v-4c0-.28.22-.5.5-.5H7V0H4v1h.5c.28 0 .5.22.5.5V3H2V1.5c0-.28.22-.5.5-.5H3V0z"></svg:path>`,
})
export class OiHeaderIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
