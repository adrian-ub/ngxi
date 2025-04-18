import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsAddRowIcon],svg[pixelarticons-add-row-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10V2H2v10h20V2h-2v8h-4V2h-2v8h-4V2H8v8zm9 9v3h-2v-3H8v-2h3v-3h2v3h3v2z"></svg:path>`,
})
export class PixelarticonsAddRowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
