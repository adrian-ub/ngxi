import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPinOutlineIcon],svg[mdi-pin-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2zm-7.2 2l1.2-1.2V4h4v8.8l1.2 1.2z"></svg:path>`,
})
export class MdiPinOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
