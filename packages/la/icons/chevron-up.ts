import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laChevronUpIcon],svg[la-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5.688L1.594 20.093l.687.718l3.906 3.907l.72.687L16 16.313l9.094 9.093l.718-.687l3.907-3.907l.687-.718zm0 2.843l11.563 11.594l-2.438 2.438l-8.406-8.375L16 13.5l-.719.688l-8.406 8.374l-2.438-2.437z"></svg:path>`,
})
export class LaChevronUpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
