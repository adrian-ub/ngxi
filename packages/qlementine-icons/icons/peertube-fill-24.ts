import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsPeertubeFill24Icon],svg[qlementine-icons-peertube-fill-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 23.2V.8A.792.792 0 0 1 5.23.14l16.8 11.2a.793.793 0 0 1 0 1.32l-16.8 11.2A.791.791 0 0 1 4 23.2m.99-11.9l7.29-4.86a.791.791 0 0 1 1.23.66v9.72a.792.792 0 0 1-1.23.66l-7.29-4.86a.793.793 0 0 1 0-1.32" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsPeertubeFill24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
