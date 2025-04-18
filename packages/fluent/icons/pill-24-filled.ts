import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPill24FilledIcon],svg[fluent-pill-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.302 3.525a5.071 5.071 0 1 1 7.172 7.172l-9.778 9.778a5.071 5.071 0 0 1-7.172-7.172zm6.111 1.061a3.57 3.57 0 0 0-5.05 0l-4.359 4.359l5.05 5.05l4.36-4.359a3.57 3.57 0 0 0 0-5.05m-8.606 13.691a.75.75 0 0 0-1.06-1.06l-1.441 1.44a1.5 1.5 0 0 1-2.1.022l-.017-.016a.75.75 0 1 0-1.039 1.082l.017.016a3 3 0 0 0 4.2-.043z"></svg:path>`,
})
export class FluentPill24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
