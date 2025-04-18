import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsFoldableHorizontalHalfIcon],svg[proicons-foldable-horizontal-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m12 5.25l6.777-1.649a2 2 0 0 1 2.473 1.944v12.91a2 2 0 0 1-2.473 1.944L12 18.75z"></svg:path><svg:path stroke-dasharray="2.5 3" d="m9.5 19.358l-4.895 1.19a1.5 1.5 0 0 1-1.855-1.457V4.91a1.5 1.5 0 0 1 1.855-1.46L9.5 4.641"></svg:path></svg:g>`,
})
export class ProiconsFoldableHorizontalHalfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
