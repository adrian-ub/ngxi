import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirLensPlusIcon],svg[iconoir-lens-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2.992 6h3m3 0h-3m0 0V3m0 3v3m-3.88 4.5C2.835 18.311 6.987 22 12 22c5.523 0 10-4.477 10-10c0-5.013-3.689-9.165-8.5-9.888"></svg:path><svg:path d="M17.197 9q-.15-.259-.323-.5m.937 5a6.01 6.01 0 0 1-4.311 4.311"></svg:path></svg:g>`,
})
export class IconoirLensPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
