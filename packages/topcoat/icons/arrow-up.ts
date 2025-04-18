import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[topcoatArrowUpIcon],svg[topcoat-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 40.5h10c2.529 0 3-.529 3-3v-15h12l-20-20l-20 20h12v15c0 2.439.5 3 3 3"></svg:path>`,
})
export class TopcoatArrowUpIcon {
  readonly viewBox = input("0 0 42 42")
  readonly width = input("1em")
  readonly height = input("1em")
}
