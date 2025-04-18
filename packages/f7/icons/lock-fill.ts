import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7LockFillIcon],svg[f7-lock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 4.258c-6.54 0-12.516 4.664-12.516 14.25v5.625c-2.53.305-3.773 1.828-3.773 4.828v17.883c0 3.375 1.547 4.898 4.664 4.898h23.25c3.117 0 4.664-1.523 4.664-4.898V28.938c0-3-1.242-4.594-3.773-4.875v-5.555c0-9.586-5.977-14.25-12.516-14.25m-8.742 13.734c0-6.539 3.89-10.125 8.742-10.125s8.742 3.586 8.742 10.125v6.047l-17.484.023Z"></svg:path>`,
})
export class F7LockFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
