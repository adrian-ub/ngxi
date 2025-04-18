import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqScreenCaptureIcon],svg[marketeq-screen-capture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 31.25a6.25 6.25 0 1 0 0-12.5a6.25 6.25 0 0 0 0 12.5"></svg:path><svg:path stroke="#306CFE" d="M43.75 18.75V8.333a2.083 2.083 0 0 0-2.083-2.083H31.25m0 37.5h10.417a2.083 2.083 0 0 0 2.083-2.083V31.25m-25-25H8.333A2.083 2.083 0 0 0 6.25 8.333V18.75m0 12.5v10.417a2.083 2.083 0 0 0 2.083 2.083H18.75"></svg:path></svg:g>`,
})
export class MarketeqScreenCaptureIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
