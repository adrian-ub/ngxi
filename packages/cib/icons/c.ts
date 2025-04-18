import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibCIcon],svg[cib-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.698 12.286s-.516-4.391-5.276-4.51c-4.76-.125-7.203 3.292-7.203 8.172s2.703 8.786 7.333 8.786s5.146-4.88 5.146-4.88l8.875.484s.521 4.411-3.193 7.771C24.666 31.474 20.109 32.02 16.927 32c-3.188-.026-7.599.047-11.87-3.958c-4.266-4-4.99-7.891-4.99-11.714c0-3.818.807-8.88 5.885-12.719C9.4 1.005 12.895.041 16.395.041c14.599 0 15.578 12.333 15.578 12.333z"></svg:path>`,
})
export class CibCIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
