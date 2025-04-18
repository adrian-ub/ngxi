import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7PlusIcon],svg[f7-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.988 47.734c1.149 0 2.11-.914 2.11-2.039V30.11h15.14c1.125 0 2.11-.96 2.11-2.109c0-1.148-.985-2.086-2.11-2.086h-15.14v-15.61c0-1.124-.961-2.038-2.11-2.038c-1.148 0-2.086.914-2.086 2.039v15.61h-15.14c-1.125 0-2.11.937-2.11 2.085s.985 2.11 2.11 2.11h15.14v15.585c0 1.125.938 2.04 2.086 2.04"></svg:path>`,
})
export class F7PlusIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
