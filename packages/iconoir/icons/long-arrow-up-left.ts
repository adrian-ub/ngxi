import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirLongArrowUpLeftIcon],svg[iconoir-long-arrow-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m10.25 4.75l-3.5 3.5l3.5 3.5"></svg:path><svg:path d="M6.75 8.25h6a4 4 0 0 1 4 4v7"></svg:path></svg:g>`,
})
export class IconoirLongArrowUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
