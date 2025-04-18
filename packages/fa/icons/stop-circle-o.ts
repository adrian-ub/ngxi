import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faStopCircleOIcon],svg[fa-stop-circle-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 0q209 0 385.5 103T1433 382.5T1536 768t-103 385.5t-279.5 279.5T768 1536t-385.5-103T103 1153.5T0 768t103-385.5T382.5 103T768 0m0 1312q148 0 273-73t198-198t73-273t-73-273t-198-198t-273-73t-273 73t-198 198t-73 273t73 273t198 198t273 73m-288-224q-14 0-23-9t-9-23V480q0-14 9-23t23-9h576q14 0 23 9t9 23v576q0 14-9 23t-23 9z"></svg:path>`,
})
export class FaStopCircleOIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}
