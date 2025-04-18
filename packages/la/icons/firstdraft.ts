import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laFirstdraftIcon],svg[la-firstdraft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4v18h6v-6h6v-6h6V4zm14 8v6h-6v6H7v1h9v-6h6v-6h3v-1zm3 3v6h-6v6h-8v1h9v-6h6v-7zm-3 9v4h1v-3h3v-1z"></svg:path>`,
})
export class LaFirstdraftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
