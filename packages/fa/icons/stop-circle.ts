import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faStopCircleIcon],svg[fa-stop-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1088 1056V480q0-14-9-23t-23-9H480q-14 0-23 9t-9 23v576q0 14 9 23t23 9h576q14 0 23-9t9-23m448-288q0 209-103 385.5T1153.5 1433T768 1536t-385.5-103T103 1153.5T0 768t103-385.5T382.5 103T768 0t385.5 103T1433 382.5T1536 768"></svg:path>`,
})
export class FaStopCircleIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}
