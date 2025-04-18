import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPhoneStroke12Icon],svg[garden-phone-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.293 7.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-.232.232a3.5 3.5 0 0 1-4.95 0L1.061 5.475a3.5 3.5 0 0 1 0-4.95l.232-.232a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414L4.414 4L8 7.586zM11 10L9 8L8 9L3 4l1-1l-2-2l-.232.232a2.5 2.5 0 0 0 0 3.536l5.464 5.464a2.5 2.5 0 0 0 3.536 0z"></svg:path>`,
})
export class GardenPhoneStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
