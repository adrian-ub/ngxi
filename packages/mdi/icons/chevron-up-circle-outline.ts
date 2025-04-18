import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiChevronUpCircleOutlineIcon],svg[mdi-chevron-up-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10m-2 0a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8M7.4 15.4l4.6-4.6l4.6 4.6L18 14l-6-6l-6 6z"></svg:path>`,
})
export class MdiChevronUpCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
