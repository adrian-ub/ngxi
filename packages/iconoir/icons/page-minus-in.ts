import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirPageMinusInIcon],svg[iconoir-page-minus-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9 12h6M4 21.4V2.6a.6.6 0 0 1 .6-.6h11.652a.6.6 0 0 1 .424.176l3.148 3.148A.6.6 0 0 1 20 5.75V21.4a.6.6 0 0 1-.6.6H4.6a.6.6 0 0 1-.6-.6"></svg:path><svg:path d="M16 2v3.4a.6.6 0 0 0 .6.6H20"></svg:path></svg:g>`,
})
export class IconoirPageMinusInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
