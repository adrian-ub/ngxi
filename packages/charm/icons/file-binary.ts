import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmFileBinaryIcon],svg[charm-file-binary-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2.75 7.75v-6h5.5l5 5v7.5M1.75 10.8h3v3.5h-3z"></svg:path><svg:path d="M7.25 14.2h3m-3-3.5h1.5v3m-1-11.45v5h5.05"></svg:path></svg:g>`,
})
export class CharmFileBinaryIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
