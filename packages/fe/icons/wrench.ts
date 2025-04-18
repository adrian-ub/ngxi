import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feWrenchIcon],svg[fe-wrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 11.584V20a2 2 0 1 1-4 0v-8.416a5.001 5.001 0 0 1 2.391-9.569L10 6l4 2l2.215-3.691A5 5 0 0 1 14 11.584"></svg:path>`,
})
export class FeWrenchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
