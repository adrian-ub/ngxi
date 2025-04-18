import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFormatColorIcon],svg[mdi-format-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M9.624 11.998L12 5.665l2.375 6.333m-3.375-9l-5.5 14h2.25l1.125-3h6.25l1.125 3h2.25l-5.5-14h-2z" fill="currentColor"></svg:path>`,
})
export class MdiFormatColorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
