import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsFoldableVerticalIcon],svg[proicons-foldable-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6.375 12l-1.39 6.853a2 2 0 0 0 1.961 2.397h10.108a2 2 0 0 0 1.96-2.397L17.625 12m-11.25 0h11.25m-11.25 0l-1.39-6.853A2 2 0 0 1 6.947 2.75h10.108a2 2 0 0 1 1.96 2.397L17.625 12"></svg:path>`,
})
export class ProiconsFoldableVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
