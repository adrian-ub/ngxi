import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPhoneCallInFill12Icon],svg[garden-phone-call-in-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 7.586l.293-.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-.232.232a3.5 3.5 0 0 1-4.95 0L1.061 6.475a3.5 3.5 0 0 1 0-4.95l.232-.232a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414L4.414 5zM11.5 5H8c-.55 0-1-.45-1-1V.5c0-.2.12-.38.31-.46s.4-.04.54.11l4 4c.15.14.19.35.11.54S11.7 5 11.5 5"></svg:path>`,
})
export class GardenPhoneCallInFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
