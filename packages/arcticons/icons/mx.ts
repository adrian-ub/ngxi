import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMxIcon],svg[arcticons-mx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5A21.5 21.5 0 1 0 45.5 24A21.51 21.51 0 0 0 24 2.5m-5.93 10.64a1.4 1.4 0 0 1 .82.23l15.75 10.2a1.44 1.44 0 0 1 0 2.41l-15.75 10.2A1.44 1.44 0 0 1 16.67 35V14.57a1.43 1.43 0 0 1 1.4-1.43"></svg:path>`,
})
export class ArcticonsMxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
