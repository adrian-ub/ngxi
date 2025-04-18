import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatUiLoopIcon],svg[flat-ui-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="50" cy="50" r="50" fill="#E74C3C"></svg:circle><svg:path fill="none" stroke="#F0C419" stroke-dasharray="216 0" stroke-dashoffset="43" stroke-linecap="square" stroke-miterlimit="10" stroke-width="8" d="M12.5 50.5c0 10 7 17 17 17c17 0 26-34 43-34c10 0 18 7 18 17s-8 17-18 17c-17 0-26-34-43-34c-10 0-17 7-17 17z"></svg:path><svg:path d="m45.938 50.5l5.047 6.516s-2.141 2.797-3.5 4.25c0 0-3.621-3.552-5.746-5.583c1.308-1.402 4.199-5.183 4.199-5.183" opacity=".15"></svg:path>`,
})
export class FlatUiLoopIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
