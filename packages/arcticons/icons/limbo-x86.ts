import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLimboX86Icon],svg[arcticons-limbo-x86-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6 5.3h35.4v23.8H6Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.7 8h30v18.4h-30Zm10 21.1l-4 4.9h18l-4-4.9M7.2 37l-2.3 4.5h37.6l-3-4.5Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36 37c-2.906-6.762 5.657-.81 5.787-4.043c.122-3.039-7.959-1.947-11.19-1.957"></svg:path>`,
})
export class ArcticonsLimboX86Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
