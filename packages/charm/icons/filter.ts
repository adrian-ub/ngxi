import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmFilterIcon],svg[charm-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1.75 1.75h12.5v1.5l-5 5.5v4l-2.5 1.5v-5.5l-5-5.5z"></svg:path>`,
})
export class CharmFilterIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
