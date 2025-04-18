import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsSearch24Icon],svg[qlementine-icons-search-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.8 16.9a8.96 8.96 0 0 1-5.81 2.13a9 9 0 1 1 9-9c0 2.22-.8 4.24-2.13 5.81l5.91 5.91a.749.749 0 1 1-1.06 1.06zm2.19-6.87c0 4.42-3.58 8-8 8s-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsSearch24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
