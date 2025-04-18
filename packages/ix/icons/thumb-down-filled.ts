import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixThumbDownFilledIcon],svg[ix-thumb-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M190.564 42.667c6.497 0 13.445.438 20.886 1.396L448 85.336v192.01l-92.949 52.098S280.339 469.12 280.332 469.12c-51.203 2.7-87.16-19.894-70.979-82.929c4.9-19.087 11.408-44.842 11.408-44.842h-73.793c-25.84 0-48.335-10.075-63.368-27.253c-16.447-18.803-22.859-44.992-18.034-73.754l.043-.146c4.503-25.73 16.576-93.107 31.115-130.421c7.463-19.105 26.184-67.108 93.84-67.108"></svg:path>`,
})
export class IxThumbDownFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
