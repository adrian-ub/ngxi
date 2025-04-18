import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faTimesCircleIcon],svg[fa-times-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1149 994q0-26-19-45L949 768l181-181q19-19 19-45q0-27-19-46l-90-90q-19-19-46-19q-26 0-45 19L768 587L587 406q-19-19-45-19q-27 0-46 19l-90 90q-19 19-19 46q0 26 19 45l181 181l-181 181q-19 19-19 45q0 27 19 46l90 90q19 19 46 19q26 0 45-19l181-181l181 181q19 19 45 19q27 0 46-19l90-90q19-19 19-46m387-226q0 209-103 385.5T1153.5 1433T768 1536t-385.5-103T103 1153.5T0 768t103-385.5T382.5 103T768 0t385.5 103T1433 382.5T1536 768"></svg:path>`,
})
export class FaTimesCircleIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}
