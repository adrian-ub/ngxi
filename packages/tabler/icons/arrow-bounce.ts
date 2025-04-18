import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowBounceIcon],svg[tabler-arrow-bounce-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 18h4M3 8a9 9 0 0 1 9 9v1l1.428-4.285a12 12 0 0 1 6.018-6.938L20 6.5"></svg:path><svg:path d="M15 6h5v5"></svg:path></svg:g>`,
})
export class TablerArrowBounceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
