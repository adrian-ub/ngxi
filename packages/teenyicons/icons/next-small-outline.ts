import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsNextSmallOutlineIcon],svg[teenyicons-next-small-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.5 5.5l.248-.434A.5.5 0 0 0 4 5.5zm0 4H4a.5.5 0 0 0 .748.434zm3.5-2l.248.434a.5.5 0 0 0 0-.868zm-4-2v4h1v-4zm.748 4.434l3.5-2l-.496-.868l-3.5 2zm3.5-2.868l-3.5-2l-.496.868l3.5 2zM10 5v5h1V5z"></svg:path>`,
})
export class TeenyiconsNextSmallOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
