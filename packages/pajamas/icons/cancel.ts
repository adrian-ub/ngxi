import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasCancelIcon],svg[pajamas-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.035 13.096a6.5 6.5 0 0 1-9.131-9.131zm1.061-1.06L3.965 2.903a6.5 6.5 0 0 1 9.131 9.131ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0" clip-rule="evenodd"></svg:path>`,
})
export class PajamasCancelIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
