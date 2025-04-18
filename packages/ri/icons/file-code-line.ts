import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFileCodeLineIcon],svg[ri-file-code-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4H5v16h14V8h-4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008zM17.657 12l-3.536 3.536l-1.414-1.415L14.828 12l-2.12-2.121l1.413-1.415zM6.343 12L9.88 8.464l1.414 1.415L9.172 12l2.12 2.121l-1.413 1.415z"></svg:path>`,
})
export class RiFileCodeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
