import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaUnfoldVerticalOutlineIcon],svg[cuida-unfold-vertical-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.74 9.528a1.1 1.1 0 0 1-1.554-.074L12 4.85L7.814 9.454a1.1 1.1 0 0 1-1.628-1.48l4.26-4.686a2.1 2.1 0 0 1 3.108 0l4.26 4.687a1.1 1.1 0 0 1-.074 1.553M6.26 15.9a1.1 1.1 0 0 1 1.554.075L12 20.579l4.186-4.604a1.1 1.1 0 0 1 1.628 1.48l-4.26 4.686a2.1 2.1 0 0 1-3.108 0l-4.26-4.687A1.1 1.1 0 0 1 6.26 15.9" clip-rule="evenodd"></svg:path>`,
})
export class CuidaUnfoldVerticalOutlineIcon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
