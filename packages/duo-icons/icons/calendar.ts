import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[duoIconsCalendarIcon],svg[duo-icons-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7z" class="duoicon-secondary-layer" opacity=".3"></svg:path><svg:path fill="currentColor" d="M16 3a1 1 0 0 1 1 1v1h2a2 2 0 0 1 2 2v3H3V7a2 2 0 0 1 2-2h2V4a1 1 0 1 1 2 0v1h6V4a1 1 0 0 1 1-1" class="duoicon-primary-layer"></svg:path>`,
})
export class DuoIconsCalendarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
