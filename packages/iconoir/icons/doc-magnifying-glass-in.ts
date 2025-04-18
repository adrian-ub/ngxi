import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirDocMagnifyingGlassInIcon],svg[iconoir-doc-magnifying-glass-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m14 15l1.5 1.5m-7-4a3 3 0 1 0 6 0a3 3 0 0 0-6 0"></svg:path><svg:path d="M4 21.4V2.6a.6.6 0 0 1 .6-.6h11.652a.6.6 0 0 1 .424.176l3.148 3.148A.6.6 0 0 1 20 5.75V21.4a.6.6 0 0 1-.6.6H4.6a.6.6 0 0 1-.6-.6"></svg:path><svg:path d="M16 2v3.4a.6.6 0 0 0 .6.6H20"></svg:path></svg:g>`,
})
export class IconoirDocMagnifyingGlassInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
