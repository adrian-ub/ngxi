import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixSingleCheckIcon],svg[ix-single-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m396.117 94.833l35.5 23.667l-185.101 277.652L91.582 241.218l30.17-30.17l118.12 118.104z"></svg:path>`,
})
export class IxSingleCheckIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
