import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsMortarboardFillIcon],svg[lets-icons-mortarboard-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.38 12.5a.5.5 0 0 0 1 0zm0-3.5v3.5h1V9z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7.362 11.68a.25.25 0 0 0-.362.225V15s0 3 5 3s5-3 5-3v-3.095a.25.25 0 0 0-.362-.224l-4.19 2.095a1 1 0 0 1-.895 0z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m4.894 8.553l6.882-3.441a.5.5 0 0 1 .448 0l6.882 3.44a.5.5 0 0 1 0 .895l-6.882 3.441a.5.5 0 0 1-.448 0l-6.882-3.44a.5.5 0 0 1 0-.895"></svg:path>`,
})
export class LetsIconsMortarboardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
