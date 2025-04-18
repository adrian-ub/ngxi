import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsMoonIcon],svg[grommet-icons-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M9.874 5.008c2.728-1.68 6.604-1.014 8.25.197c-2.955.84-5.11 3.267-5.242 6.415c-.18 4.28 3.006 6.588 5.24 7.152c-1.964 1.343-4.36 1.293-5.235 1.172c-3.568-.492-6.902-3.433-7.007-7.711c-.106-4.278 2.573-6.35 3.994-7.225z"></svg:path>`,
})
export class GrommetIconsMoonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
