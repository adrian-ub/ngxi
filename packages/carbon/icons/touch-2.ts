import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTouch2Icon],svg[carbon-touch-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 15h-2a11 11 0 0 0-22 0H3a13 13 0 0 1 26 0"></svg:path><svg:path fill="currentColor" d="M25 28h-2V15a7 7 0 1 0-14 0v13H7V15a9 9 0 0 1 18 0Z"></svg:path><svg:path fill="currentColor" d="M21 20H11v-5a5 5 0 0 1 10 0Zm-8-2h6v-3a3 3 0 0 0-6 0Z"></svg:path>`,
})
export class CarbonTouch2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
