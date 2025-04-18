import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmArrowDownLeftIcon],svg[charm-arrow-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.75 11.75h-6.5v-6.5m7.5-1l-7.5 7.5"></svg:path>`,
})
export class CharmArrowDownLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
