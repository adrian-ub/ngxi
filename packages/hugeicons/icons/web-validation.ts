import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWebValidationIcon],svg[hugeicons-web-validation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 10c-.01-3.585-.114-5.472-1.391-6.682C18.217 2 15.979 2 11.5 2C7.022 2 4.782 2 3.391 3.318S2 6.758 2 11s0 6.364 1.391 7.682c1.227 1.162 3.112 1.3 6.609 1.316m5-2.498s.5 0 1 1c0 0 1.588-2.5 3-3"></svg:path><svg:path d="M22 17a5 5 0 1 1-10 0a5 5 0 0 1 10 0M2 8.5h19m-14.5-3h.009m3.991 0h.009"></svg:path></svg:g>`,
})
export class HugeiconsWebValidationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
