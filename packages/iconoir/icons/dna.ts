import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirDnaIcon],svg[iconoir-dna-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4 3c0 5.625 8 9 8 9s8 3.375 8 9"></svg:path><svg:path d="M20 3c0 5.625-8 9-8 9s-8 3.375-8 9M8 6h11M8 18h11m-8-9h5.5M11 15h5.5"></svg:path></svg:g>`,
})
export class IconoirDnaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
