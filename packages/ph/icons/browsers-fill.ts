import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBrowsersFillIcon],svg[ph-browsers-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H72a16 16 0 0 0-16 16v16H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-16h16a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-32 48v16H40V88Zm32 80h-16V88a16 16 0 0 0-16-16H72V56h144Z"></svg:path>`,
})
export class PhBrowsersFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
