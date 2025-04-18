import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsFoldableVerticalHalfIcon],svg[proicons-foldable-vertical-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m17.25 12l1.648 6.777a2 2 0 0 1-1.943 2.473h-9.91A2 2 0 0 1 5.1 18.777L6.75 12z"></svg:path><svg:path stroke-dasharray="2 3" d="m6.142 9.5l-1.19-4.895A1.5 1.5 0 0 1 6.408 2.75H17.59a1.5 1.5 0 0 1 1.458 1.855L17.859 9.5"></svg:path></svg:g>`,
})
export class ProiconsFoldableVerticalHalfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
