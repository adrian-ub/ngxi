import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsTrendingUpLineIcon],svg[majesticons-trending-up-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2.293 17.707a1 1 0 0 0 1.414 0L9 12.414l3.293 3.293a1 1 0 0 0 1.414 0L20 9.414V14a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1h-7a1 1 0 1 0 0 2h4.586L13 13.586l-3.293-3.293a1 1 0 0 0-1.414 0l-6 6a1 1 0 0 0 0 1.414z"></svg:path></svg:g>`,
})
export class MajesticonsTrendingUpLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
