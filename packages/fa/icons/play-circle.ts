import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faPlayCircleIcon],svg[fa-play-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 0q209 0 385.5 103T1433 382.5T1536 768t-103 385.5t-279.5 279.5T768 1536t-385.5-103T103 1153.5T0 768t103-385.5T382.5 103T768 0m384 823q32-18 32-55t-32-55L608 393q-31-19-64-1q-32 19-32 56v640q0 37 32 56q16 8 32 8q17 0 32-9z"></svg:path>`,
})
export class FaPlayCircleIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}
