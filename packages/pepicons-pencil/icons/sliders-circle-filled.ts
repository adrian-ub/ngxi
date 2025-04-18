import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilSlidersCircleFilledIcon],svg[pepicons-pencil-sliders-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilSlidersCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6 7.75a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m11.38 0a.5.5 0 0 1 .5-.5h1.62a.5.5 0 0 1 0 1h-1.62a.5.5 0 0 1-.5-.5"></svg:path><svg:path d="M15.75 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 1a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M6 17.75a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m11.38 0a.5.5 0 0 1 .5-.5h1.62a.5.5 0 0 1 0 1h-1.62a.5.5 0 0 1-.5-.5"></svg:path><svg:path d="M15.75 19.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 1a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M6 12.75a.5.5 0 0 1 .5-.5h2.13a.5.5 0 0 1 0 1H6.5a.5.5 0 0 1-.5-.5m6.5 0a.5.5 0 0 1 .5-.5h6.5a.5.5 0 0 1 0 1H13a.5.5 0 0 1-.5-.5"></svg:path><svg:path d="M10.75 14.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 1a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilSlidersCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilSlidersCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
