import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riChat1LineIcon],svg[ri-chat-1-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3h4a8 8 0 1 1 0 16v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8m2 14h2a6 6 0 0 0 0-12h-4a6 6 0 0 0-6 6c0 3.61 2.462 5.966 8 8.48z"></svg:path>`,
})
export class RiChat1LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
