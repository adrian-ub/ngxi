import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsSearch1Icon],svg[lineicons-search-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.25 2.75C6.142 2.75 2 6.89 2 11.998s4.142 9.248 9.25 9.248a9.2 9.2 0 0 0 5.987-2.198l3.481 3.48a.75.75 0 1 0 1.06-1.06l-3.48-3.48a9.2 9.2 0 0 0 2.202-5.99c0-5.108-4.142-9.248-9.25-9.248M3.5 11.998a7.75 7.75 0 0 1 7.75-7.748a7.749 7.749 0 1 1 0 15.496a7.75 7.75 0 0 1-7.75-7.748" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsSearch1Icon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
