import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laChevronRightIcon],svg[la-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.25 2.594l-.719.687l-3.594 3.625l-.687.688l.688.718L15.625 16l-7.688 7.688l-.687.718l.688.688l3.593 3.625l.719.687l.719-.687l12-12l.687-.719l-.687-.719l-12-12zm0 2.844L22.813 16L12.25 26.563l-2.188-2.188l7.688-7.656l.719-.719l-.719-.719l-7.688-7.656z"></svg:path>`,
})
export class LaChevronRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
