import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirLongArrowRightDownIcon],svg[iconoir-long-arrow-right-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M19 13.5L15.5 17L12 13.5"></svg:path><svg:path d="M15.5 17v-6a4 4 0 0 0-4-4h-7"></svg:path></svg:g>`,
})
export class IconoirLongArrowRightDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
