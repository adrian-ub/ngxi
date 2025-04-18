import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faPlusCircleIcon],svg[fa-plus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1216 832V704q0-26-19-45t-45-19H896V384q0-26-19-45t-45-19H704q-26 0-45 19t-19 45v256H384q-26 0-45 19t-19 45v128q0 26 19 45t45 19h256v256q0 26 19 45t45 19h128q26 0 45-19t19-45V896h256q26 0 45-19t19-45m320-64q0 209-103 385.5T1153.5 1433T768 1536t-385.5-103T103 1153.5T0 768t103-385.5T382.5 103T768 0t385.5 103T1433 382.5T1536 768"></svg:path>`,
})
export class FaPlusCircleIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}
