import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamSwordFIcon],svg[jam-sword-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.646 14.096a1 1 0 1 1-1.414 1.414l-1.414-1.414l-2.828 2.829a1 1 0 0 1-1.415 1.414l-1.414-1.414a1 1 0 0 1 1.414-1.415l2.829-2.828l-1.414-1.414a1 1 0 0 1 1.414-1.414zm.708-.707L6.11 9.146L14.596.661l3.536.707l.707 3.536z"></svg:path>`,
})
export class JamSwordFIcon {
  readonly viewBox = input("-2.5 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
