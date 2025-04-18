import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmFilesIcon],svg[charm-files-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m9.25 1.75l4 4v5.5h-7.5v-9.5z"></svg:path><svg:path d="M9.25 2.25v3.5h3.5m-2.5 6v2.5h-7.5v-9.5h2.5"></svg:path></svg:g>`,
})
export class CharmFilesIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
