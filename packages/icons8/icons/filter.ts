import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8FilterIcon],svg[icons8-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4v2.344l.22.28l7.78 9.72V28l1.594-1.188l4-3L19 23.5v-7.156l7.78-9.72l.22-.28V4zm2.28 2h17.44l-7.19 9h-3.06zM15 17h2v5.5L15 24z"></svg:path>`,
})
export class Icons8FilterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
