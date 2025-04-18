import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteBookOutlineIcon],svg[flowbite-book-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2m0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"></svg:path>`,
})
export class FlowbiteBookOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
