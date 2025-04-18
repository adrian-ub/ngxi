import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFileWordLineIcon],svg[ri-file-word-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 8v8h-2l-2-2l-2 2H8V8h2v5l2-2l2 2V8h1V4H5v16h14V8zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008z"></svg:path>`,
})
export class RiFileWordLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
