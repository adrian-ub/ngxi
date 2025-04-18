import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faAdjustIcon],svg[fa-adjust-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 1312V224q-148 0-273 73T297 495t-73 273t73 273t198 198t273 73m768-544q0 209-103 385.5T1153.5 1433T768 1536t-385.5-103T103 1153.5T0 768t103-385.5T382.5 103T768 0t385.5 103T1433 382.5T1536 768"></svg:path>`,
})
export class FaAdjustIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}
