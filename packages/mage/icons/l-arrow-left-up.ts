import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageLArrowLeftUpIcon],svg[mage-l-arrow-left-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m3.5 9.32l5.21-5.21a1.214 1.214 0 0 1 1.724 0l5.209 5.21"></svg:path><svg:path d="M20.5 20.249h-7.286a3.643 3.643 0 0 1-3.643-3.643V3.759"></svg:path></svg:g>`,
})
export class MageLArrowLeftUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
