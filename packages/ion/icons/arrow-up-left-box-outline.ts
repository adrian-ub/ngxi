import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionArrowUpLeftBoxOutlineIcon],svg[ion-arrow-up-left-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M242.764 123.636h178.691A42.547 42.547 0 0 1 464 166.182v255.273A42.546 42.546 0 0 1 421.455 464H166.182a42.54 42.54 0 0 1-42.546-42.545V242.764M180.364 48H48v132.364M296 296L48 48"></svg:path>`,
})
export class IonArrowUpLeftBoxOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
