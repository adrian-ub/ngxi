import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpScreenRotationAltIcon],svg[ic-sharp-screen-rotation-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 7.59l6.41-6.41L20.24 11h-2.83L10.4 4L5.41 9H8v2H2V5h2zM20 19h2v-6h-6v2h2.59l-4.99 5l-7.01-7H3.76l9.83 9.83L20 16.41z"></svg:path>`,
})
export class IcSharpScreenRotationAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
