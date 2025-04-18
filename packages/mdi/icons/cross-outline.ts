import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCrossOutlineIcon],svg[mdi-cross-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 6V1h-7v5H3v7h5.5v10h7V13H21V6zm3.5 5h-5.5v10h-3V11H5V8h5.5V3h3v5H19z"></svg:path>`,
})
export class MdiCrossOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
