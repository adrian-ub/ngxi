import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmBookOpenIcon],svg[charm-book-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 3.75c-1.75-1-2.25-1-6.25-1v9.5c4 0 4.5 0 6.25 1c1.75-1 3.25-1 6.25-1v-9.5c-4 0-4.5 0-6.25 1m0 .5v8.5"></svg:path>`,
})
export class CharmBookOpenIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
