import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siNorthWestEscapeFillIcon],svg[si-north-west-escape-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 5h4a1 1 0 1 1 0 2H8.414l6.293 6.293a1 1 0 0 1-1.414 1.414L7 8.414V10a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1m8 2a1 1 0 0 1 1-1h.6C17.482 6 19 7.518 19 9.4v6.2c0 1.882-1.518 3.4-3.4 3.4H9.4A3.394 3.394 0 0 1 6 15.6V15a1 1 0 1 1 2 0v.6c0 .778.622 1.4 1.4 1.4h6.2c.778 0 1.4-.622 1.4-1.4V9.4c0-.778-.622-1.4-1.4-1.4H15a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class SiNorthWestEscapeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
