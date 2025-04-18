import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsXUpperCaseIcon],svg[ls-x-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M535 0L316 357l232 378h-84L274 427L85 735H0l231-378L12 0h84l178 289L451 0z"></svg:path>`,
})
export class LsXUpperCaseIcon {
  readonly viewBox = input("0 0 548 735")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
