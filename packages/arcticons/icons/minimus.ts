import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinimusIcon],svg[arcticons-minimus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 17.508l-12.75-7.361a4.5 4.5 0 0 0-4.5 0h0a4.5 4.5 0 0 0-2.25 3.896v19.914a4.5 4.5 0 0 0 6.75 3.896L24 30.493"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.25 10.147a4.5 4.5 0 0 1 2.25 3.896v19.914a4.5 4.5 0 0 1-6.75 3.897l-17.246-9.957a4.5 4.5 0 0 1 0-7.793l17.246-9.957a4.5 4.5 0 0 1 4.5 0"></svg:path>`,
})
export class ArcticonsMinimusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
