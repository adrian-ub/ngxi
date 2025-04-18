import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCircleLockAdd01Icon],svg[hugeicons-circle-lock-add-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16.5 22v-8m-4 4h8m-9.825 3.998C6.64 22.095 3.5 18.806 3.5 14.999C3.5 11.133 6.697 8 10.64 8a7.17 7.17 0 0 1 5.86 3"></svg:path><svg:path d="M15 9V6.5a4.5 4.5 0 1 0-9 0v3"></svg:path></svg:g>`,
})
export class HugeiconsCircleLockAdd01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
