import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7EqualIcon],svg[f7-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.797 22.691h28.43c1.125 0 2.086-.96 2.086-2.109c0-1.148-.961-2.086-2.086-2.086h-28.43c-1.125 0-2.11.938-2.11 2.086s.985 2.11 2.11 2.11m0 14.813h28.43c1.125 0 2.086-.938 2.086-2.086s-.961-2.11-2.086-2.11h-28.43c-1.125 0-2.11.962-2.11 2.11s.985 2.086 2.11 2.086"></svg:path>`,
})
export class F7EqualIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
