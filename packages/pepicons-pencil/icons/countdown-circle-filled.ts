import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilCountdownCircleFilledIcon],svg[pepicons-pencil-countdown-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilCountdownCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M13 6a.5.5 0 0 1 .5-.5A7.5 7.5 0 1 1 6 13a.5.5 0 0 1 1 0a6.5 6.5 0 1 0 6.5-6.5a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:path d="M11 6.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-2.5 1.5a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M7 10.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"></svg:path><svg:path fill-rule="evenodd" d="M8.947 14.224a.5.5 0 0 0-.223-.671l-2-1a.5.5 0 0 0-.448.894l2 1a.5.5 0 0 0 .671-.223" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6.854 12.646a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 1 1-.708-.707l1.5-1.5a.5.5 0 0 1 .708 0M13.5 9.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17 13a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 .5.5" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilCountdownCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilCountdownCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
