import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasClockIcon],svg[pajamas-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.5 8a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.75 3.75a.75.75 0 0 0-1.5 0v4.56l.22.22l2.254 2.254a.75.75 0 1 0 1.06-1.06L8.75 7.689z" clip-rule="evenodd"></svg:path>`,
})
export class PajamasClockIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
