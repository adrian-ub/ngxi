import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsFanOptionIcon],svg[grommet-icons-fan-option-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:rect width="20" height="20" x="2" y="2" rx="1"></svg:rect><svg:rect width="20" height="20" x="2" y="2" rx="10"></svg:rect><svg:path d="M15 9.5c.5-.333.9-1.7.5-2.5S13.333 5.667 13 5.5m1 5c1.5-2 0-3.5-2.5-5c-1.546-.927 2-1.5 4.5.5c1.875 1.5 1 2.5-2 5.5zm-5.015 3.902c-.5.333-.9 1.7-.5 2.5s2.167 1.333 2.5 1.5m-1-5c-1.5 2 0 3.5 2.5 5c1.546.927-2 1.5-4.5-.5c-1.875-1.5-1-2.5 2-5.5zm-.443-4.458c-.334-.5-1.7-.9-2.5-.5s-1.334 2.166-1.5 2.5m5-1c-2-1.5-3.5 0-5 2.5c-.928 1.546-1.5-2 .5-4.5c1.5-1.875 2.5-1 5.5 2zm3.902 5.014c.333.5 1.7.9 2.5.5s1.333-2.166 1.5-2.5m-5 1c2 1.5 3.5 0 5-2.5c.927-1.546 1.5 2-.5 4.5c-1.5 1.876-2.5 1-5.5-2z"></svg:path><svg:path d="M3.5 5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm0 17a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm17 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm0-17a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3ZM12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GrommetIconsFanOptionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
