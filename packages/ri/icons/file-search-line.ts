import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFileSearchLineIcon],svg[ri-file-search-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4H5v16h14V8h-4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008zm10.529 11.454a4.001 4.001 0 0 1-4.86-6.274a4 4 0 0 1 6.274 4.86l2.21 2.21l-1.413 1.415zm-.618-2.032a2 2 0 1 0-2.828-2.828a2 2 0 0 0 2.828 2.828"></svg:path>`,
})
export class RiFileSearchLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
