import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riNumber2Icon],svg[ri-number-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 7.5a4 4 0 1 0-8 0H6a6 6 0 1 1 10.663 3.776l-7.319 8.723L18 20v2H6v-1.127l9.064-10.802A3.98 3.98 0 0 0 16 7.5"></svg:path>`,
})
export class RiNumber2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
