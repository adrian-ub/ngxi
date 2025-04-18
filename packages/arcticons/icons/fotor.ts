import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFotorIcon],svg[arcticons-fotor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5v43M34.75 5.38l-21.5 37.24m29.37-29.37L5.38 34.75M45.5 24h-43m40.12 10.75L5.38 13.25m29.37 29.37L13.25 5.38"></svg:path>`,
})
export class ArcticonsFotorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
