import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFilterEditIcon],svg[hugeicons-filter-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13.242 17.5q-.071.453-.126.744c-.229 1.222-1.96 1.957-2.888 2.612c-.552.39-1.222-.074-1.293-.678a196 196 0 0 1-.674-6.917a1.05 1.05 0 0 0-.402-.755C5.371 10.646 3.598 8.6 2.63 7.45c-.3-.356-.398-.617-.457-1.076C1.97 4.8 1.87 4.015 2.33 3.507C2.79 3 3.606 3 5.236 3h11.532c1.63 0 2.445 0 2.906.507c.224.246.315.558.327.993"></svg:path><svg:path d="m20.862 7.44l.695.692a1.497 1.497 0 0 1 0 2.12l-3.638 3.697a2 2 0 0 1-1.05.551l-2.254.488a.5.5 0 0 1-.597-.593l.48-2.235c.074-.397.267-.762.554-1.047l3.683-3.674a1.507 1.507 0 0 1 2.127 0"></svg:path></svg:g>`,
})
export class HugeiconsFilterEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
