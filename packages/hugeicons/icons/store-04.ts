import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStore04Icon],svg[hugeicons-store-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 10.987v4.506c0 2.833 0 4.249.879 5.129c.878.88 2.293.88 5.121.88h6c2.828 0 4.243 0 5.121-.88S21 18.326 21 15.493v-4.506M7 17.974h4"></svg:path><svg:path d="M17.796 2.5L6.15 2.53c-1.738-.09-2.184 1.249-2.184 1.903c0 .585-.075 1.438-1.14 3.042c-1.066 1.603-.986 2.08-.385 3.19c.498.92 1.766 1.28 2.428 1.341c2.1.048 3.122-1.766 3.122-3.041c1.042 3.203 4.005 3.203 5.325 2.837c1.322-.367 2.456-1.68 2.723-2.837c.156 1.437.63 2.276 2.027 2.852c1.449.597 2.694-.315 3.319-.9s1.026-1.883-.088-3.31c-.768-.984-1.089-1.912-1.194-2.872c-.06-.557-.114-1.155-.506-1.536c-.572-.556-1.394-.725-1.801-.699"></svg:path></svg:g>`,
})
export class HugeiconsStore04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
