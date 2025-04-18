import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFramerIcon],svg[hugeicons-framer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12 9l6 6H6v-5c0-.827.173-1 1-1zm0 0L6 3h11c.827 0 1 .173 1 1v4c0 .827-.173 1-1 1zm0 12l-6-6h6z" color="currentColor"></svg:path>`,
})
export class HugeiconsFramerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
