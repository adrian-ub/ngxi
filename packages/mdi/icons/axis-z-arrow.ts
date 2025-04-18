import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAxisZArrowIcon],svg[mdi-axis-z-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 2l4 4h-3v7.82l9.39 5.43l-1 1.75L12 15.56L2.61 21l-1-1.75L11 13.82V6H8z"></svg:path>`,
})
export class MdiAxisZArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
