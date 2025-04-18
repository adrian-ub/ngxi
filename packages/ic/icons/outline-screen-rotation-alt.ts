import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineScreenRotationAltIcon],svg[ic-outline-screen-rotation-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 7.59l5-5c.78-.78 2.05-.78 2.83 0L20.24 11h-2.83L10.4 4L5.41 9H8v2H2V5h2zM20 19h2v-6h-6v2h2.59l-4.99 5l-7.01-7H3.76l8.41 8.41c.78.78 2.05.78 2.83 0l5-5z"></svg:path>`,
})
export class IcOutlineScreenRotationAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
