import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFileWordFillIcon],svg[ri-file-word-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 2l5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2zm-2 6v4.989L12 11l-1.99 2L10 8H8v8h2l2-2l2 2h2V8z"></svg:path>`,
})
export class RiFileWordFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
