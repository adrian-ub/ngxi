import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laSdCardIcon],svg[la-sd-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.5 5l-.313.406L6 9.656V27h19V5zm1 2H23v18H8V10.344zM13 9v4h2V9zm3 0v4h2V9zm3 0v4h2V9zm-9 1v4h2v-4z"></svg:path>`,
})
export class LaSdCardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
