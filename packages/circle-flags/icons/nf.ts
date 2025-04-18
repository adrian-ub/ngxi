import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsNfIcon],svg[circle-flags-nf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsNf0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsNf0)"><svg:path fill="#6da544" d="M0 0h144.7l108.4 41.2L367.3 0H512v512H367.3l-110.2-41.4L144.7 512H0z"></svg:path><svg:path fill="#eee" d="M144.7 0h222.6v512H144.7z"></svg:path><svg:path fill="#6da544" d="m323 334l-67-211.6L189.3 334h50.1v55.7h33.4V334z"></svg:path></svg:g>`,
})
export class CircleFlagsNfIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
