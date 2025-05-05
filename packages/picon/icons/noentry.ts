import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconNoentryIcon],svg[picon-noentry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8c-5 0-5-8 0-8s5 8 0 8m0-7C0 1 0 7 4 7s4-6 0-6M1 6l5-5l1 1l-5 5"></svg:path>`,
})
export class PiconNoentryIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
