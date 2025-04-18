import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowLeftBottomIcon],svg[mdi-arrow-left-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4v6.5a6.5 6.5 0 0 1-6.5 6.5H7.83l3.09 3.09L9.5 21.5L4 16l5.5-5.5l1.41 1.41L7.83 15h5.67c2.5 0 4.5-2 4.5-4.5V4z"></svg:path>`,
})
export class MdiArrowLeftBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
