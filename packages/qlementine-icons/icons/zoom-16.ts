import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsZoom16Icon],svg[qlementine-icons-zoom-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.5 11.9a6.005 6.005 0 0 1-9.48-4.89c0-3.31 2.69-6 6-6a6.005 6.005 0 0 1 4.89 9.48l2.82 2.82a.996.996 0 0 1 0 1.41a.994.994 0 0 1-1.41 0zm1.52-4.89c0 2.76-2.24 5-5 5s-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsZoom16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
