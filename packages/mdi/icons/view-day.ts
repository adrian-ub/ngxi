import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiViewDayIcon],svg[mdi-view-day-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3v3h19V3m-1 5H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1M2 21h19v-3H2z"></svg:path>`,
})
export class MdiViewDayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
