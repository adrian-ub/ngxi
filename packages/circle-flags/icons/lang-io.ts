import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLangIoIcon],svg[circle-flags-lang-io-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLangIo0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLangIo0)"><svg:path fill="#338af3" d="M0 0h512v512H0z"></svg:path><svg:path fill="#eee" d="m256 49l-27 158h-64l32 55L73 366l151-55l32 55l32-55l151 55l-124-103l32-55h-64z"></svg:path></svg:g>`,
})
export class CircleFlagsLangIoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
