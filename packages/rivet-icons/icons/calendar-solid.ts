import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsCalendarSolidIcon],svg[rivet-icons-calendar-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1a1 1 0 0 0-2 0v1H1v13h14V2h-3V1a1 1 0 1 0-2 0v1H6zM3 6h10v2H3zm2 6.5v-2h2v2zm4 0v-2h2v2z"></svg:path>`,
})
export class RivetIconsCalendarSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
