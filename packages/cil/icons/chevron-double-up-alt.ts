import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilChevronDoubleUpAltIcon],svg[cil-chevron-double-up-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M20.095 20.405L12 12.31l-8.095 8.095l-1.061-1.061l9.155-9.155l9.155 9.155l-1.061 1.061z" fill="currentColor"></svg:path><svg:path d="M20.095 12.905L12 4.81l-8.095 8.095l-1.061-1.061l9.155-9.155l9.155 9.155l-1.061 1.061z" fill="currentColor"></svg:path>`,
})
export class CilChevronDoubleUpAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
