import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTriangle01Icon],svg[hugeicons-triangle-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7.898 6.733C9.712 3.578 10.619 2 12 2c1.38 0 2.288 1.578 4.102 4.733l3.757 6.532c1.726 3 2.589 4.5 1.908 5.618C21.087 20 19.31 20 15.757 20H8.243c-3.553 0-5.33 0-6.01-1.117s.182-2.618 1.908-5.618zM12 20v2m8-13l-2 1M4 9l2 1"></svg:path><svg:path d="M4 14.409c1.89.642 3.252 2.468 3.252 4.62q0 .5-.094.971m9.684 0a5 5 0 0 1-.094-.97c0-2.153 1.362-3.979 3.252-4.621M15.281 6A4.67 4.67 0 0 1 12 7.35A4.67 4.67 0 0 1 8.719 6"></svg:path></svg:g>`,
})
export class HugeiconsTriangle01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
