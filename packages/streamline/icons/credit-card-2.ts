import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCreditCard2Icon],svg[streamline-credit-card-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.75 3h-5.5a.5.5 0 0 0-.5.5v9.375a.5.5 0 0 0 .5.5h5.5a.5.5 0 0 0 .5-.5V3.5a.5.5 0 0 0-.5-.5"></svg:path><svg:path d="M7 9.438a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5M1.906 4.583h-.834a.5.5 0 0 1-.35-.146a.5.5 0 0 1-.144-.354v-3A.5.5 0 0 1 .723.73a.5.5 0 0 1 .35-.147h11.855a.496.496 0 0 1 .494.5v3c0 .133-.052.26-.145.354a.5.5 0 0 1-.35.146h-.833M7 5.21a.125.125 0 1 1 0-.25m0 .25a.125.125 0 1 0 0-.25m0 6.51a.125.125 0 0 1 0-.25m0 .25a.125.125 0 0 0 0-.25"></svg:path></svg:g>`,
})
export class StreamlineCreditCard2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
