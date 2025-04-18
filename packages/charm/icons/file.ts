import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmFileIcon],svg[charm-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2.75 1.75h5.5l5 5v7.5H2.75z"></svg:path><svg:path d="M7.75 2.25v5h5"></svg:path></svg:g>`,
})
export class CharmFileIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
