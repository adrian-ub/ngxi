import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psPinIcon],svg[ps-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 277q-9 0-15 6t-6 16q0 9 6 15t15 6h128q10 0 16 6t6 15v150q0 21 21 21t21-21V341q0-9 6-15t16-6h128q9 0 15-6t6-15q0-10-6-16t-15-6h-22L277 43q22 0 22-22q0-9-6-15t-16-6H107Q97 0 91 6t-6 15q0 22 22 22L43 277zM149 43h86l64 234H85z"></svg:path>`,
})
export class PsPinIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
