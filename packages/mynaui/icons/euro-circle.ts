import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiEuroCircleIcon],svg[mynaui-euro-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path d="M12 12H8.5m0 0H7m1.5 0c0 2 1.565 4 3.75 4c1.209 0 2.126-.267 2.75-.867M8.5 12c0-2 1.25-4 3.75-4c1.209 0 2.126.267 2.75.866"></svg:path></svg:g>`,
})
export class MynauiEuroCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
