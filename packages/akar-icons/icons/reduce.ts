import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsReduceIcon],svg[akar-icons-reduce-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 10l7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"></svg:path>`,
})
export class AkarIconsReduceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
