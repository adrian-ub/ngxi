import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsImageAdd01Icon],svg[hugeicons-image-add-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.508 2.99c-4.483 0-6.724 0-8.117 1.392C2 5.774 2 8.015 2 12.496s0 6.722 1.392 8.114c1.393 1.392 3.634 1.392 8.117 1.392s6.724 0 8.117-1.392c1.392-1.392 1.392-3.633 1.392-8.114v-.5"></svg:path><svg:path d="M4.999 20.99c4.21-4.752 8.94-11.053 16-6.327M17.996 1.998v8.008M22 5.977l-8.01.015"></svg:path></svg:g>`,
})
export class HugeiconsImageAdd01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
