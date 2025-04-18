import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowLeftTopIcon],svg[mdi-arrow-left-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 13.5V20h-2v-6.5C18 11 16 9 13.5 9H7.83l3.08 3.09L9.5 13.5L4 8l5.5-5.5l1.42 1.41L7.83 7h5.67a6.5 6.5 0 0 1 6.5 6.5"></svg:path>`,
})
export class MdiArrowLeftTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
