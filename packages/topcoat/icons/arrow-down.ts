import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[topcoatArrowDownIcon],svg[topcoat-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.5 2.5h-10c-2.53 0-3 .529-3 3v15H.5l20 20l20-20h-12v-15c0-2.439-.5-3-3-3"></svg:path>`,
})
export class TopcoatArrowDownIcon {
  readonly viewBox = input("0 0 42 42")
  readonly width = input("1em")
  readonly height = input("1em")
}
