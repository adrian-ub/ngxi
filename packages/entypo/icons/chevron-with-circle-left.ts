import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoChevronWithCircleLeftIcon],svg[entypo-chevron-with-circle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.302 6.776a.5.5 0 0 0-.71 0L7.785 9.641a.51.51 0 0 0 0 .717l2.807 2.864a.5.5 0 0 0 .71 0a.51.51 0 0 0 0-.717L9 10l2.302-2.506a.51.51 0 0 0 0-.718M10 .4A9.6 9.6 0 0 0 .4 10c0 5.303 4.298 9.6 9.6 9.6s9.6-4.297 9.6-9.6A9.6 9.6 0 0 0 10 .4m0 17.954A8.353 8.353 0 0 1 1.646 10A8.354 8.354 0 1 1 10 18.354"></svg:path>`,
})
export class EntypoChevronWithCircleLeftIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
