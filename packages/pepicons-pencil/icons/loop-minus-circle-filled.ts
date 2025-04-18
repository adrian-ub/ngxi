import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLoopMinusCircleFilledIcon],svg[pepicons-pencil-loop-minus-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilLoopMinusCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M8.182 8.182a5.5 5.5 0 1 0 7.778 7.778a5.5 5.5 0 0 0-7.778-7.778m7.071 7.071A4.5 4.5 0 1 1 8.89 8.889a4.5 4.5 0 0 1 6.364 6.364" clip-rule="evenodd"></svg:path><svg:path d="M15 17.121a1 1 0 0 1 1.414-1.414l3.789 3.789a1 1 0 0 1-1.414 1.414zm-5.293-4.707a.5.5 0 1 1 0-1h4.485a.5.5 0 0 1 0 1z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilLoopMinusCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilLoopMinusCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
