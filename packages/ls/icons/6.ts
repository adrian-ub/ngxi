import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ls6Icon],svg[ls-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M373 39L186 331c14-2 28-4 42-4c125 0 227 102 227 227c0 126-102 227-227 227c-106 0-196-73-221-171c-5-17-7-37-7-56c0-43 13-83 33-117l6-10L311 0zM106 456l-19 28c-10 22-16 45-16 70c0 86 71 157 157 157s155-71 155-157s-69-156-155-156c-49 0-93 23-122 58"></svg:path>`,
})
export class Ls6Icon {
  readonly viewBox = input("0 0 455 781")
  readonly width = input("0.59em")
  readonly height = input("1em")
}
