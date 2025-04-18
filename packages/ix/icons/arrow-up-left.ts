import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixArrowUpLeftIcon],svg[ix-arrow-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m85.333 213.333l128-128l30.294 30.294L167.04 192h238.293v256h-42.666V234.667H167.04l76.587 76.373l-30.294 30.293z" clip-rule="evenodd"></svg:path>`,
})
export class IxArrowUpLeftIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
