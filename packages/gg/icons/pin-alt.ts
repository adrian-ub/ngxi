import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPinAltIcon],svg[gg-pin-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 11a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path fill-rule="evenodd" d="M18 9a6 6 0 0 1-5 5.917V20a1 1 0 1 1-2 0v-5.083A6.002 6.002 0 0 1 12 3a6 6 0 0 1 6 6m-6 4a4 4 0 1 0 0-8a4 4 0 0 0 0 8" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgPinAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
