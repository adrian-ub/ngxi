import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsCalendarIcon],svg[rivet-icons-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7 9.5v2H5v-2zm4 2v-2H9v2z"></svg:path><svg:path d="M5 0a1 1 0 0 1 1 1v1h4V1a1 1 0 1 1 2 0v1h3v13H1V2h3V1a1 1 0 0 1 1-1M3 4v2h10V4zm10 4H3v5h10z"></svg:path></svg:g>`,
})
export class RivetIconsCalendarIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
