import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideDribbbleIcon],svg[lucide-dribbble-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94m19.5 1.9c-6.62-1.41-12.14 1-16.38 6.32"></svg:path><svg:path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></svg:path></svg:g>`,
})
export class LucideDribbbleIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
