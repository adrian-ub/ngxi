import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsKnifeBreadIcon],svg[hugeicons-knife-bread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.44 15.896c.447.482.92 1.238 1.65 1.121c.353-.055.643-.37 1.223-.997l1.662-1.796l.38-2.055l1.9-.41l.38-2.055l1.9-.411l.582-2.058l1.037-.272c.465-.123.697-.184.8-.401s.02-.43-.15-.856c-.26-.648-.676-1.44-1.261-1.818a4.04 4.04 0 0 0-5.055 0c-.274.215-.556.52-1.121 1.131L2.5 17.85a1.953 1.953 0 0 0 0 2.61c.755.816 2.011.69 2.615-.263l2.544-4.021c.373-.59.787-1.44 1.584-1.283c.33.065.62.378 1.198 1.003" color="currentColor"></svg:path>`,
})
export class HugeiconsKnifeBreadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
