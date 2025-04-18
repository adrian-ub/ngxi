import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPercentCircleIcon],svg[mdi-percent-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2M8.83 7.05c.98 0 1.77.79 1.77 1.78c0 .98-.79 1.77-1.77 1.77c-.99 0-1.78-.79-1.78-1.77c0-.99.79-1.78 1.78-1.78M15.22 17c-.98 0-1.77-.8-1.77-1.78s.79-1.77 1.77-1.77s1.78.79 1.78 1.77S16.2 17 15.22 17m-6.72.03L7 15.53L15.53 7l1.5 1.5z"></svg:path>`,
})
export class MdiPercentCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
