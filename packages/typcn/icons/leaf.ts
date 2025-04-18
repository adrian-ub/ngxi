import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnLeafIcon],svg[typcn-leaf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 11c0-4.9-3.499-9.1-8.32-9.983L11.5.983l-.18.033a10.15 10.15 0 0 0-.82 19.779V22a1 1 0 1 0 2 0v-1.205A10.15 10.15 0 0 0 20 11m-7.5 7.7v-2.993l4.354-4.354a.5.5 0 0 0-.707-.707L12.5 14.293v-3.586l2.354-2.354a.5.5 0 0 0-.707-.707L12.5 9.293V6a1 1 0 1 0-2 0v3.293L8.854 7.646a.5.5 0 0 0-.707.707l2.354 2.354v3.586l-3.646-3.646a.5.5 0 0 0-.707.707l4.354 4.354V18.7A8.144 8.144 0 0 1 11.5 3.019a8.145 8.145 0 0 1 1 15.681"></svg:path>`,
})
export class TypcnLeafIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
