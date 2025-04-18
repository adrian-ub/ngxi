import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCircleLockMinus01Icon],svg[hugeicons-circle-lock-minus-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11 22c-3.936.098-7-3.192-7-7c0-3.866 3.119-7 6.966-7A6.96 6.96 0 0 1 17 11.5"></svg:path><svg:path d="M15.5 9.5v-3a4.5 4.5 0 1 0-9 0v3M12 17h8"></svg:path></svg:g>`,
})
export class HugeiconsCircleLockMinus01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
