import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPushChevronUpRIcon],svg[gg-push-chevron-up-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 21h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2m-4-2a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4zm8.172-2.288l-1.415-1.415L12 11.055l4.243 4.242l-1.415 1.415L12 13.883zM8 10h8V8H8z" clip-rule="evenodd"></svg:path>`,
})
export class GgPushChevronUpRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
