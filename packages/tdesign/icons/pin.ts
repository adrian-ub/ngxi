import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPinIcon],svg[tdesign-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.787.693l5.523 5.522l-6.365 7.774l2.188 2.188l-5.659 5.659l-4.95-4.95L2.16 23.25L.746 21.836l6.364-6.364l-4.95-4.95l5.66-5.659l2.188 2.189zm-4.313 18.314l2.83-2.83l-2.054-2.054l6.365-7.774l-2.963-2.962l-7.779 6.358L7.82 7.692l-2.83 2.83z"></svg:path>`,
})
export class TdesignPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
