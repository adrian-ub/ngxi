import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirLongArrowLeftDownIcon],svg[iconoir-long-arrow-left-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4.5 13.5L8 17l3.5-3.5"></svg:path><svg:path d="M8 17v-6a4 4 0 0 1 4-4h7"></svg:path></svg:g>`,
})
export class IconoirLongArrowLeftDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
