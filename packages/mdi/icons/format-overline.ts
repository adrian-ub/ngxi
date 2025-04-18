import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFormatOverlineIcon],svg[mdi-format-overline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5h14V3H5zm4.62 11L12 9.67L14.37 16M11 7L5.5 21h2.25l1.12-3h6.25l1.13 3h2.25L13 7z"></svg:path>`,
})
export class MdiFormatOverlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
