import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandAdobeIllustratorIcon],svg[tabler-brand-adobe-illustrator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12c0-4.243 0-6.364 1.318-7.682S7.758 3 12 3s6.364 0 7.682 1.318S21 7.758 21 12s0 6.364-1.318 7.682S16.242 21 12 21s-6.364 0-7.682-1.318S3 16.242 3 12"></svg:path><svg:path d="m12.947 15.79l-.82-2.653m-4.864 2.652l.82-2.652m0 0l.687-2.218c.558-1.806.838-2.708 1.335-2.708c.498 0 .777.902 1.336 2.708l.686 2.218m-4.043 0h4.043m3.662 2.652v-4.736m0-2.369v-.473"></svg:path></svg:g>`,
})
export class TablerBrandAdobeIllustratorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
