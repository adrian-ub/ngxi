import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilOpenCircleFilledIcon],svg[pepicons-pencil-open-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilOpenCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M17.5 17.5v-3.25a.5.5 0 0 1 1 0V18a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5h3.75a.5.5 0 0 1 0 1H8.5v9z"></svg:path><svg:path d="M13.354 13.354a.5.5 0 0 1-.708-.708l5-5a.5.5 0 0 1 .708.708z"></svg:path><svg:path d="M18.5 11.5a.5.5 0 0 1-1 0V8a.5.5 0 0 1 1 0z"></svg:path><svg:path d="M14.5 8.5a.5.5 0 0 1 0-1H18a.5.5 0 0 1 0 1z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilOpenCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilOpenCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
