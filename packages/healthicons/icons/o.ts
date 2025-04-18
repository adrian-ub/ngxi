import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsOIcon],svg[healthicons-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 24c0-7.732 6.268-14 14-14s14 6.268 14 14s-6.268 14-14 14s-14-6.268-14-14m14-10c-5.523 0-10 4.477-10 10s4.477 10 10 10s10-4.477 10-10s-4.477-10-10-10" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsOIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
