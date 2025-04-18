import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCirclePasswordIcon],svg[hugeicons-circle-password-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13.993 15H14m-4 0h.007M5 15a7 7 0 1 1 14 0a7 7 0 0 1-14 0"></svg:path><svg:path d="M16.5 9.5v-3a4.5 4.5 0 1 0-9 0v3"></svg:path></svg:g>`,
})
export class HugeiconsCirclePasswordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
