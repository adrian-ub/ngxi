import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignViewInArFilledIcon],svg[tdesign-view-in-ar-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 1.5h-5v5h2v-3h3zm16 0h-5v2h3v3h2zm-4.445 5.841L12 3.845L5.945 7.341L12 10.835zm1.006 1.729L13 12.567v7.01l6.063-3.5zm-8.062 10.507v-7.01l-6.06-3.498l-.002 7.008zM3.5 20.5v-3h-2v5h5v-2zm19 2v-5h-2v3h-3v2z"></svg:path>`,
})
export class TdesignViewInArFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
