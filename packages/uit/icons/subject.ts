import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitSubjectIcon],svg[uit-subject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 8h19a.5.5 0 0 0 0-1h-19a.5.5 0 0 0 0 1m11 9h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1m8-5h-19a.5.5 0 0 0 0 1h19a.5.5 0 0 0 0-1"></svg:path>`,
})
export class UitSubjectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
