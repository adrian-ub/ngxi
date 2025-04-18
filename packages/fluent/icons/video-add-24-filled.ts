import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentVideoAdd24FilledIcon],svg[fluent-video-add-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7.25A3.25 3.25 0 0 1 5.25 4h6.5A3.25 3.25 0 0 1 15 7.25v7.5a3.25 3.25 0 0 1-2.005 3.003Q13 17.627 13 17.5a6.5 6.5 0 0 0-11-4.69zm17.257 9.438L16 14.44V7.562l3.257-2.25c1.161-.8 2.745.03 2.745 1.441v8.495c0 1.41-1.584 2.242-2.745 1.44M12 17.5a5.5 5.5 0 1 0-11 0a5.5 5.5 0 0 0 11 0M7 18l.001 2.503a.5.5 0 1 1-1 0V18H3.496a.5.5 0 0 1 0-1H6v-2.5a.5.5 0 1 1 1 0V17h2.497a.5.5 0 0 1 0 1z"></svg:path>`,
})
export class FluentVideoAdd24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
