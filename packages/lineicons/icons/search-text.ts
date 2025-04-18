import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsSearchTextIcon],svg[lineicons-search-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.277 13.25a.75.75 0 0 1-.75.75h-6.56a.75.75 0 1 1 0-1.5h6.56a.75.75 0 0 1 .75.75m-2.43-3.5a.75.75 0 0 1-.75.75h-4.13a.75.75 0 1 1 0-1.5h4.13a.75.75 0 0 1 .75.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 11.499C2 6.39 6.142 2.25 11.25 2.25s9.25 4.14 9.25 9.248a9.2 9.2 0 0 1-2.202 5.99l3.481 3.48a.75.75 0 1 1-1.06 1.061l-3.482-3.481a9.2 9.2 0 0 1-5.987 2.198c-5.108 0-9.25-4.14-9.25-9.248m9.25-7.748a7.749 7.749 0 1 0 0 15.496a7.749 7.749 0 1 0 0-15.496" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsSearchTextIcon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
