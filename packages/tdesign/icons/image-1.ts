import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignImage1Icon],svg[tdesign-image-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0M9.928 8.124l4.419 7.015l2.581-3.975L23.966 22H1.188zm0 3.752L4.812 20h15.47l-3.354-5.164l-2.607 4.014z"></svg:path>`,
})
export class TdesignImage1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
