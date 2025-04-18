import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laPlusIcon],svg[la-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5v10H5v2h10v10h2V17h10v-2H17V5z"></svg:path>`,
})
export class LaPlusIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
