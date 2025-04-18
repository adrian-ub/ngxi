import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPersonMail20FilledIcon],svg[fluent-person-mail-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-4.991 9A2 2 0 0 0 2 13c0 1.691.833 2.966 2.135 3.797C5.417 17.614 7.145 18 9 18v-5a2 2 0 0 1 1.996-2zm10.5 4.927l-4.496-2.623A1.5 1.5 0 0 1 11.5 12h6a1.5 1.5 0 0 1 1.5 1.5v.009zm.228 1.013L19 14.645V17.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-3.046l4.248 2.478a.5.5 0 0 0 .49.008"></svg:path>`,
})
export class FluentPersonMail20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
