import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneForkLeftIcon],svg[ic-twotone-fork-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.41 15.59L8 17l-4-4l4-4l1.41 1.41L7.83 12c1.51-.33 3.73.08 5.17 1.36V6.83l-1.59 1.59L10 7l4-4l4 4l-1.41 1.41L15 6.83V21h-2v-4c-.73-2.58-3.07-3.47-5.17-3z"></svg:path>`,
})
export class IcTwotoneForkLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
