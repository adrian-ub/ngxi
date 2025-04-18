import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaUnfoldHorizontalOutlineIcon],svg[cuida-unfold-horizontal-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.186 18.454a1.1 1.1 0 0 1 .074-1.553l4.605-4.187l-4.605-4.186a1.1 1.1 0 0 1 1.48-1.627l4.686 4.26a2.1 2.1 0 0 1 0 3.107l-4.686 4.26a1.1 1.1 0 0 1-1.554-.073ZM8.814 6.975a1.1 1.1 0 0 1-.074 1.553l-4.605 4.186l4.605 4.187a1.1 1.1 0 1 1-1.48 1.627l-4.686-4.26a2.1 2.1 0 0 1 0-3.107L7.26 6.9a1.1 1.1 0 0 1 1.554.074Z" clip-rule="evenodd"></svg:path>`,
})
export class CuidaUnfoldHorizontalOutlineIcon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
