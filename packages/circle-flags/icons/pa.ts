import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsPaIcon],svg[circle-flags-pa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsPa0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsPa0)"><svg:path fill="#eee" d="M0 0h256l256 256v256H256L0 256z"></svg:path><svg:path fill="#0052b4" d="M0 256v256h256V256z"></svg:path><svg:path fill="#d80027" d="M256 0h256v256H256z"></svg:path><svg:path fill="#0052b4" d="m152.4 89l16.6 51h53.6l-43.4 31.6l16.6 51l-43.4-31.5l-43.4 31.5l16.6-51L82.2 140h53.6z"></svg:path><svg:path fill="#d80027" d="m359.6 289.4l16.6 51h53.6L386.4 372l16.6 51l-43.4-31.5l-43.4 31.6l16.6-51l-43.4-31.6H343z"></svg:path></svg:g>`,
})
export class CircleFlagsPaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
