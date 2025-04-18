import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopSlidersCircleFilledIcon],svg[pepicons-pop-sliders-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopSlidersCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5.5 7.75a1 1 0 0 1 1-1H13a1 1 0 1 1 0 2H6.5a1 1 0 0 1-1-1m11.375 0a1 1 0 0 1 1-1H19.5a1 1 0 1 1 0 2h-1.625a1 1 0 0 1-1-1"></svg:path><svg:path d="M15.75 8.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m0 2a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5m-10.25 7a1 1 0 0 1 1-1H13a1 1 0 1 1 0 2H6.5a1 1 0 0 1-1-1m11.375 0a1 1 0 0 1 1-1H19.5a1 1 0 1 1 0 2h-1.625a1 1 0 0 1-1-1"></svg:path><svg:path d="M15.75 18.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m0 2a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5m-10.25-8a1 1 0 0 1 1-1h1.625a1 1 0 0 1 0 2H6.5a1 1 0 0 1-1-1m6.5 0a1 1 0 0 1 1-1h6.5a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1"></svg:path><svg:path d="M10.75 13.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m0 2a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopSlidersCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopSlidersCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
