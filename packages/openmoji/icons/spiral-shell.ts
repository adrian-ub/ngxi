import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSpiralShellIcon],svg[openmoji-spiral-shell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFA7C0" d="M30 31s-2 23 7 26s14-34 6-34c-6.207 0-7-1-11.71-.342c-1.37.191-3.306.102-5.29 1.342c-8 5 5 29 8 31"></svg:path><svg:path fill="#E67A94" d="M42 22s1-3-2-3h-7s-2.14-.42-1 3"></svg:path><svg:path fill="#FFA7C0" d="M34 18c3.2-5.333 5.133.333 5 0"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M30 31s-2 23 7 26s14-34 6-34c-6.207 0-7-1-11.71-.342c-1.37.191-3.306.102-5.29 1.342c-8 5 5 29 8 31m8-33s1-3-2-3h-7s-2.14-.42-1 3m2-4c3.2-5.333 5.133.333 5 0"></svg:path>`,
})
export class OpenmojiSpiralShellIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
